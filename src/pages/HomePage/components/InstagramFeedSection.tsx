import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowDown, FaInstagram, FaPlay, FaSyncAlt } from 'react-icons/fa';
import { fadeInUp, scaleIn, staggerContainer } from '../../../components/Motion/reveal';
import { InstagramFeedSectionScope } from './styles/InstagramFeedSection.styles';

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url?: string;
  permalink?: string;
  thumbnail_url?: string;
  timestamp?: string;
  username?: string;
}

interface InstagramFeedResponse {
  ok: boolean;
  configured: boolean;
  profile?: { username?: string; profile_picture_url?: string };
  posts: InstagramMedia[];
  stories: InstagramMedia[];
  nextCursor?: string | null;
}

const INSTAGRAM_FEED_ENDPOINT = '/.netlify/functions/instagram-feed';

const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/vs.studio.anfrage/';

const InstagramFeedSection: React.FC = () => {
  const { t } = useTranslation();
  const [feed, setFeed] = useState<InstagramFeedResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadMoreError, setLoadMoreError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(INSTAGRAM_FEED_ENDPOINT, { signal: controller.signal })
      .then(async response => {
        if (!response.ok) throw new Error(`Instagram feed returned ${response.status}`);
        return (await response.json()) as InstagramFeedResponse;
      })
      .then(setFeed)
      .catch(error => {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        console.warn('Instagram feed is unavailable.', error);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const posts = feed?.posts.filter(post => post.media_url || post.thumbnail_url) ?? [];
  const stories = feed?.stories.filter(story => story.media_url || story.thumbnail_url) ?? [];
  const username = feed?.profile?.username ?? 'vs.studio.anfrage';

  const loadMore = async () => {
    if (!feed?.nextCursor || loadingMore) return;

    setLoadingMore(true);
    setLoadMoreError(false);

    try {
      const response = await fetch(
        `${INSTAGRAM_FEED_ENDPOINT}?after=${encodeURIComponent(feed.nextCursor)}`,
      );
      if (!response.ok) throw new Error(`Instagram feed returned ${response.status}`);
      const nextPage = (await response.json()) as InstagramFeedResponse;

      setFeed(current => {
        if (!current) return nextPage;
        const knownIds = new Set(current.posts.map(post => post.id));
        const newPosts = nextPage.posts.filter(post => !knownIds.has(post.id));

        return {
          ...current,
          posts: [...current.posts, ...newPosts],
          nextCursor: nextPage.nextCursor ?? null,
        };
      });
    } catch (error) {
      console.warn('More Instagram posts could not be loaded.', error);
      setLoadMoreError(true);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <InstagramFeedSectionScope>
      <motion.section
        className='section instagram-section'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
        aria-labelledby='instagram-feed-title'
      >
        <div className='instagram-shell'>
          <div className='instagram-heading'>
            <div className='instagram-copy'>
              <span className='section-kicker'><FaInstagram aria-hidden='true' /> {t('home.instagram.eyebrow')}</span>
              <h2 id='instagram-feed-title'>{t('home.instagram.title')}</h2>
              <p>{t('home.instagram.desc')}</p>
            </div>
            <a className='btn btn-secondary instagram-profile-link' href={INSTAGRAM_PROFILE_URL} target='_blank' rel='noopener noreferrer'>
              <FaInstagram aria-hidden='true' /> {t('home.instagram.follow')}
            </a>
          </div>

          <div className='automation-flow' aria-label={t('home.instagram.flowLabel')}>
            <div className='automation-step'>
              <span>01</span>
              <strong>{t('home.instagram.flowPostTitle')}</strong>
              <p>{t('home.instagram.flowPostText')}</p>
            </div>
            <FaArrowDown className='automation-arrow' aria-hidden='true' />
            <div className='automation-step'>
              <span>02</span>
              <strong>{t('home.instagram.flowSyncTitle')}</strong>
              <p>{t('home.instagram.flowSyncText')}</p>
            </div>
            <FaArrowDown className='automation-arrow' aria-hidden='true' />
            <div className='automation-step'>
              <span>03</span>
              <strong>{t('home.instagram.flowWebsiteTitle')}</strong>
              <p>{t('home.instagram.flowWebsiteText')}</p>
            </div>
          </div>

          {stories.length > 0 && (
            <div className='stories-block' aria-label={t('home.instagram.storiesLabel')}>
              <span className='stories-label'>{t('home.instagram.storiesLabel')}</span>
              <div className='stories-row'>
                {stories.map((story, index) => (
                  <a
                    className='story-link'
                    href={story.permalink ?? INSTAGRAM_PROFILE_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={story.id}
                    aria-label={`${t('home.instagram.storyLabel')} ${index + 1}`}
                  >
                    <span className='story-ring'>
                      <img src={story.thumbnail_url ?? story.media_url} alt='' loading='lazy' />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {loading ? (
            <div className='instagram-grid' aria-label={t('home.instagram.loading')} aria-busy='true'>
              {Array.from({ length: 6 }, (_, index) => <div className='instagram-skeleton' key={index} />)}
            </div>
          ) : posts.length > 0 ? (
            <motion.div className='instagram-grid' variants={staggerContainer}>
              {posts.map(post => (
                <motion.a
                  className='instagram-card'
                  href={post.permalink ?? INSTAGRAM_PROFILE_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={post.id}
                  variants={scaleIn}
                  aria-label={post.caption || t('home.instagram.openPost')}
                >
                  <img src={post.thumbnail_url ?? post.media_url} alt={post.caption?.slice(0, 140) || t('home.instagram.postAlt')} loading='lazy' />
                  {post.media_type === 'VIDEO' && <FaPlay className='media-type-icon' aria-hidden='true' />}
                  <span className='instagram-card-overlay'>
                    <FaInstagram aria-hidden='true' />
                    <span>{post.caption || `@${username}`}</span>
                  </span>
                </motion.a>
              ))}
            </motion.div>
          ) : (
            <div className='instagram-empty'>
              <FaInstagram aria-hidden='true' />
              <p>{t('home.instagram.empty')}</p>
              <a href={INSTAGRAM_PROFILE_URL} target='_blank' rel='noopener noreferrer'>{t('home.instagram.openProfile')}</a>
            </div>
          )}

          {!loading && posts.length > 0 && (
            <div className='instagram-pagination' aria-live='polite'>
              {feed?.nextCursor ? (
                <button className='btn btn-secondary load-more-button' type='button' onClick={loadMore} disabled={loadingMore}>
                  {loadingMore ? <FaSyncAlt className='spin' aria-hidden='true' /> : <FaArrowDown aria-hidden='true' />}
                  {loadingMore ? t('home.instagram.loadingMore') : t('home.instagram.loadMore')}
                </button>
              ) : (
                <span className='instagram-end'>{t('home.instagram.noMore')}</span>
              )}
              {loadMoreError && <p className='load-more-error'>{t('home.instagram.loadMoreError')}</p>}
            </div>
          )}
        </div>
      </motion.section>
    </InstagramFeedSectionScope>
  );
};

export default InstagramFeedSection;

