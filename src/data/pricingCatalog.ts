export type WebsitePricingPackageKey = 'starter' | 'business' | 'pro';

export const WEBSITE_PRICING_PACKAGES = {
  starter: {
    name: 'Starter',
    priceFrom: 490,
    rangeFrom: 490,
    rangeTo: 590,
    supportMonthly: 62,
    supportYearly: 521,
  },
  business: {
    name: 'Business',
    priceFrom: 590,
    rangeFrom: 590,
    rangeTo: 790,
    supportMonthly: 86,
    supportYearly: 722,
  },
  pro: {
    name: 'Pro',
    priceFrom: 790,
    rangeFrom: 790,
    rangeTo: 990,
    supportMonthly: 160,
    supportYearly: 1344,
  },
} as const;

export const CONFIGURATOR_PRICING = {
  launchMin: 600,
  launchMax: 900,
  launchScale: 0.42,
  launchStep: 10,
  starterSupportMonthly: WEBSITE_PRICING_PACKAGES.starter.supportMonthly,
  businessSupportMonthly: WEBSITE_PRICING_PACKAGES.business.supportMonthly,
} as const;

export const getPackageRange = (key: WebsitePricingPackageKey) => {
  const pack = WEBSITE_PRICING_PACKAGES[key];
  return {
    from: pack.rangeFrom,
    to: pack.rangeTo,
  };
};

export const getWebsitePricingReference = (language: 'de' | 'en' | 'uk') => {
  const starter = WEBSITE_PRICING_PACKAGES.starter;
  const business = WEBSITE_PRICING_PACKAGES.business;
  const pro = WEBSITE_PRICING_PACKAGES.pro;

  if (language === 'uk') {
    return [
      `Поточні ціни на сторінці Pricing: Starter від EUR ${starter.priceFrom} (зазвичай EUR ${starter.rangeFrom}-${starter.rangeTo}), Business від EUR ${business.priceFrom} (зазвичай EUR ${business.rangeFrom}-${business.rangeTo}), Pro від EUR ${pro.priceFrom} (зазвичай EUR ${pro.rangeFrom}-${pro.rangeTo}).`,
      `Configurator після вибору параметрів показує стартовий діапазон EUR ${CONFIGURATOR_PRICING.launchMin}-${CONFIGURATOR_PRICING.launchMax}.`,
      `Support: Starter EUR ${starter.supportMonthly}/місяць або EUR ${starter.supportYearly}/рік, Business EUR ${business.supportMonthly}/місяць або EUR ${business.supportYearly}/рік, Pro EUR ${pro.supportMonthly}/місяць або EUR ${pro.supportYearly}/рік.`,
    ].join(' ');
  }

  if (language === 'en') {
    return [
      `Current Pricing page packages: Starter from EUR ${starter.priceFrom} (usually EUR ${starter.rangeFrom}-${starter.rangeTo}), Business from EUR ${business.priceFrom} (usually EUR ${business.rangeFrom}-${business.rangeTo}), Pro from EUR ${pro.priceFrom} (usually EUR ${pro.rangeFrom}-${pro.rangeTo}).`,
      `After selecting project parameters, the Configurator shows a launch range of EUR ${CONFIGURATOR_PRICING.launchMin}-${CONFIGURATOR_PRICING.launchMax}.`,
      `Support: Starter EUR ${starter.supportMonthly}/month or EUR ${starter.supportYearly}/year, Business EUR ${business.supportMonthly}/month or EUR ${business.supportYearly}/year, Pro EUR ${pro.supportMonthly}/month or EUR ${pro.supportYearly}/year.`,
    ].join(' ');
  }

  return [
    `Aktuelle Preise auf der Pricing-Seite: Starter ab EUR ${starter.priceFrom} (meist EUR ${starter.rangeFrom}-${starter.rangeTo}), Business ab EUR ${business.priceFrom} (meist EUR ${business.rangeFrom}-${business.rangeTo}), Pro ab EUR ${pro.priceFrom} (meist EUR ${pro.rangeFrom}-${pro.rangeTo}).`,
    `Nach Auswahl der Projektparameter zeigt der Configurator einen Startbereich von EUR ${CONFIGURATOR_PRICING.launchMin}-${CONFIGURATOR_PRICING.launchMax}.`,
    `Support: Starter EUR ${starter.supportMonthly}/Monat oder EUR ${starter.supportYearly}/Jahr, Business EUR ${business.supportMonthly}/Monat oder EUR ${business.supportYearly}/Jahr, Pro EUR ${pro.supportMonthly}/Monat oder EUR ${pro.supportYearly}/Jahr.`,
  ].join(' ');
};
