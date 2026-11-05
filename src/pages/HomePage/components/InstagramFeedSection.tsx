import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaArrowDown,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
  FaExternalLinkAlt,
  FaHeart,
  FaImages,
  FaInstagram,
  FaPlay,
  FaRegComment,
  FaTimes,
} from 'react-icons/fa';
import { fadeInUp } from '../../../components/Motion/reveal';
import {
  InstagramFeedSectionScope,
  InstagramStoryViewer,
} from './styles/InstagramFeedSection.styles';

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url?: string;
  permalink?: string;
  thumbnail_url?: string;
  timestamp?: string;
  username?: string;
  like_count?: number;
  comments_count?: number;
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
const INITIAL_POST_COUNT = 6;

const InstagramFeedSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [feed, setFeed] = useState<InstagramFeedResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(INITIAL_POST_COUNT);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);

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
  const activeStory = activeStoryIndex === null ? null : stories[activeStoryIndex];

  useEffect(() => {
    if (activeStoryIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveStoryIndex(null);
      if (event.key === 'ArrowLeft') {
        setActiveStoryIndex(index => index === null ? null : (index - 1 + stories.length) % stories.length);
      }
      if (event.key === 'ArrowRight') {
        setActiveStoryIndex(index => index === null ? null : (index + 1) % stories.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeStoryIndex, stories.length]);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < posts.length;
  const formatDate = (timestamp?: string) => timestamp
    ? new Intl.DateTimeFormat(i18n.resolvedLanguage || i18n.language, {
      day: 'numeric', month: 'long', year: 'numeric',
    }).format(new Date(timestamp))
    : '';

  return (
    <>
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
                  <button
                    className='story-link'
                    type='button'
                    onClick={() => setActiveStoryIndex(index)}
                    key={story.id}
                    aria-label={`${t('home.instagram.storyLabel')} ${index + 1}`}
                  >
                    <span className='story-ring'>
                      <img src={story.thumbnail_url ?? story.media_url} alt='' loading='lazy' />
                    </span>
                    <span className='story-preview-meta'>
                      <FaInstagram aria-hidden='true' />
                      <span><strong>{story.username ?? username}</strong>{t('home.instagram.storyLabel')}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {!loading && posts.length > 0 && (
            <div className='instagram-profile-summary'>
              <span className='profile-avatar-ring'>
                {feed?.profile?.profile_picture_url
                  ? <img src={feed.profile.profile_picture_url} alt='' />
                  : <FaInstagram aria-hidden='true' />}
              </span>
              <div>
                <strong>@{username}</strong>
                <span>{t('home.instagram.profileMeta', { count: posts.length })}</span>
              </div>
              <span className='live-badge'>{t('home.instagram.liveFeed')}</span>
            </div>
          )}

          {loading ? (
            <div className='instagram-grid' aria-label={t('home.instagram.loading')} aria-busy='true'>
              {Array.from({ length: 6 }, (_, index) => <div className='instagram-skeleton' key={index} />)}
            </div>
          ) : posts.length > 0 ? (
            <div className='instagram-grid'>
              {visiblePosts.map(post => (
                <article
                  className='instagram-card'
                  key={post.id}
                >
                  <header className='post-header'>
                    <span className='post-avatar'>
                      {feed?.profile?.profile_picture_url
                        ? <img src={feed.profile.profile_picture_url} alt='' />
                        : <FaInstagram aria-hidden='true' />}
                    </span>
                    <div><strong>{post.username ?? username}</strong><span>{formatDate(post.timestamp)}</span></div>
                    <FaEllipsisH aria-hidden='true' />
                  </header>
                  <a className='post-media' href={post.permalink ?? INSTAGRAM_PROFILE_URL} target='_blank' rel='noopener noreferrer' aria-label={post.caption || t('home.instagram.openPost')}>
                    <img src={post.thumbnail_url ?? post.media_url} alt={post.caption?.slice(0, 140) || t('home.instagram.postAlt')} loading='lazy' />
                    {post.media_type === 'VIDEO' && <span className='media-type-icon'><FaPlay aria-hidden='true' /> Reels</span>}
                    {post.media_type === 'CAROUSEL_ALBUM' && <span className='media-type-icon'><FaImages aria-hidden='true' /> {t('home.instagram.carousel')}</span>}
                  </a>
                  <div className='post-content'>
                    <div className='post-actions'>
                      {typeof post.like_count === 'number' && <span><FaHeart aria-hidden='true' /> {t('home.instagram.likes', { count: post.like_count })}</span>}
                      {typeof post.comments_count === 'number' && <span><FaRegComment aria-hidden='true' /> {t('home.instagram.comments', { count: post.comments_count })}</span>}
                      <a href={post.permalink ?? INSTAGRAM_PROFILE_URL} target='_blank' rel='noopener noreferrer'><FaExternalLinkAlt aria-hidden='true' /> {t('home.instagram.openPost')}</a>
                    </div>
                    <p className='post-caption'><strong>{post.username ?? username}</strong> {post.caption || t('home.instagram.noCaption')}</p>
                    <time dateTime={post.timestamp}>{formatDate(post.timestamp)}</time>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className='instagram-empty'>
              <FaInstagram aria-hidden='true' />
              <p>{t('home.instagram.empty')}</p>
              <a href={INSTAGRAM_PROFILE_URL} target='_blank' rel='noopener noreferrer'>{t('home.instagram.openProfile')}</a>
            </div>
          )}

          {!loading && posts.length > 0 && (
            <div className='instagram-pagination' aria-live='polite'>
              {hasMorePosts ? (
                <button className='btn btn-secondary load-more-button' type='button' onClick={() => setVisibleCount(count => count + 6)}>
                  <FaArrowDown aria-hidden='true' />
                  {t('home.instagram.loadMore')}
                </button>
              ) : (
                <span className='instagram-end'>{t('home.instagram.noMore')}</span>
              )}
            </div>
          )}
        </div>
      </motion.section>
      </InstagramFeedSectionScope>
      {activeStory && createPortal(
        <InstagramStoryViewer
          role='dialog'
          aria-modal='true'
          aria-label={`${t('home.instagram.storyLabel')} ${activeStoryIndex! + 1}`}
          onClick={() => setActiveStoryIndex(null)}
        >
          <div className='story-viewer-frame' onClick={event => event.stopPropagation()}>
            <div className='story-progress' aria-hidden='true'>
              {stories.map((story, index) => (
                <span className={index <= activeStoryIndex! ? 'is-active' : ''} key={story.id} />
              ))}
            </div>
            <header className='story-viewer-header'>
              <span className='story-viewer-avatar'>
                {feed?.profile?.profile_picture_url
                  ? <img src={feed.profile.profile_picture_url} alt='' />
                  : <FaInstagram aria-hidden='true' />}
              </span>
              <div>
                <strong>{activeStory.username ?? username}</strong>
                <span>{formatDate(activeStory.timestamp)}</span>
              </div>
              <button type='button' onClick={() => setActiveStoryIndex(null)} aria-label={t('common.close', { defaultValue: 'Close' })}>
                <FaTimes aria-hidden='true' />
              </button>
            </header>
            <div className='story-viewer-media'>
              {activeStory.media_type === 'VIDEO' ? (
                <video src={activeStory.media_url} poster={activeStory.thumbnail_url} autoPlay playsInline controls />
              ) : (
                <img src={activeStory.media_url ?? activeStory.thumbnail_url} alt={activeStory.caption ?? ''} />
              )}
            </div>
            {stories.length > 1 && (
              <>
                <button className='story-nav story-nav-prev' type='button' onClick={() => setActiveStoryIndex(index => index === null ? null : (index - 1 + stories.length) % stories.length)} aria-label={t('common.previous', { defaultValue: 'Previous' })}>
                  <FaChevronLeft aria-hidden='true' />
                </button>
                <button className='story-nav story-nav-next' type='button' onClick={() => setActiveStoryIndex(index => index === null ? null : (index + 1) % stories.length)} aria-label={t('common.next', { defaultValue: 'Next' })}>
                  <FaChevronRight aria-hidden='true' />
                </button>
              </>
            )}
            <a className='story-instagram-link' href={activeStory.permalink ?? INSTAGRAM_PROFILE_URL} target='_blank' rel='noopener noreferrer'>
              <FaInstagram aria-hidden='true' /> {t('home.instagram.openPost')}
            </a>
          </div>
        </InstagramStoryViewer>,
        document.body,
      )}
    </>
  );
};

export default InstagramFeedSection;

