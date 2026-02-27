import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px; /* Ð’Ñ–Ð´ÑÑ‚ÑƒÐ¿Ð¸ Ð¼Ñ–Ð¶ ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ð°Ð¼Ð¸ */

  /* ÐœÐ¾Ð±Ñ–Ð»ÑŒÐ½Ñ– Ð¿Ñ€Ð¸ÑÑ‚Ñ€Ð¾Ñ— (Ð´Ð¾ 768px) */
  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  }

  /* ÐŸÐ»Ð°Ð½ÑˆÐµÑ‚Ð¸ (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding: 0 24px;
  }

  /* ÐÐµÐ²ÐµÐ»Ð¸ÐºÑ– Ð´ÐµÑÐºÑ‚Ð¾Ð¿Ð¸ (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
  }

  /* Ð¡ÐµÑ€ÐµÐ´Ð½Ñ– Ð´ÐµÑÐºÑ‚Ð¾Ð¿Ð¸ (1280px - 1439px) */
  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
  }

  /* Ð’ÐµÐ»Ð¸ÐºÑ– Ð´ÐµÑÐºÑ‚Ð¾Ð¿Ð¸ (1440px Ñ– Ð±Ñ–Ð»ÑŒÑˆÐµ) */
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
  }

  /* Ð”ÑƒÐ¶Ðµ Ð²ÐµÐ»Ð¸ÐºÑ– ÐµÐºÑ€Ð°Ð½Ð¸ (1920px Ñ– Ð±Ñ–Ð»ÑŒÑˆÐµ) */
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`;