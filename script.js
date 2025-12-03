const pricingData = [
  { views: '10K', price: 8 },
  { views: '50K', price: 12 },
  { views: '100K', price: 16 },
  { views: '500K', price: 24 },
  { views: '1M', price: 36 },
];

const pageviewsOutput = document.querySelector('.pricing-card-pageviews');
const rangeInput = document.querySelector('.pricing-card-range');
const priceValueOutput = document.querySelector('.pricing-card-price-value');
const pricePeriodOutput = document.querySelector('.pricing-card-price-period');
const billingToggleInput = document.querySelector('.billing-toggle-input');

const updatePricing = () => {
  const index = Number(rangeInput.value);

  const currentPlan = pricingData[index];

  if (!currentPlan) return;

  const isYearly = billingToggleInput.checked;

  let finalPrice = currentPlan.price;

  if (isYearly) {
    finalPrice = finalPrice * 0.75;
  }

  pageviewsOutput.textContent = `${currentPlan.views} PAGEVIEWS`;
  priceValueOutput.textContent = `$${finalPrice.toFixed(2)}`;

  // pricePeriodOutput.textContent = isYearly ? '/ year' : '/ month';
};

rangeInput.addEventListener('input', updatePricing);
billingToggleInput.addEventListener('change', updatePricing);

updatePricing();
