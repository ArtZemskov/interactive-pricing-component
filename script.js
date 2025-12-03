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
const billingContainer = document.querySelector('.pricing-card-billing');

const updatePricing = () => {
  const index = Number(rangeInput.value);
  const currentPlan = pricingData[index];

  if (!currentPlan) return;

  const isYearly = billingToggleInput.checked;

  let finalPrice = currentPlan.price;

  if (isYearly) {
    finalPrice = finalPrice * 0.75;
    billingContainer.classList.add('is-yearly');
  } else {
    billingContainer.classList.remove('is-yearly');
  }

  pageviewsOutput.textContent = `${currentPlan.views} PAGEVIEWS`;
  priceValueOutput.textContent = `$${finalPrice.toFixed(2)}`;

  updateSliderFill();
};

const updateSliderFill = () => {
  const min = Number(rangeInput.min) || 0;
  const max = Number(rangeInput.max) || 4;
  const value = Number(rangeInput.value);

  const percent = ((value - min) / (max - min)) * 100;

  const fillColor = 'hsl(174, 77%, 80%)';
  const emptyColor = 'hsl(224, 65%, 95%)';

  rangeInput.style.background = `linear-gradient(to right, ${fillColor} 0%, ${fillColor} ${percent}%, ${emptyColor} ${percent}%, ${emptyColor} 100%)`;
};

rangeInput.addEventListener('input', updatePricing);
billingToggleInput.addEventListener('change', updatePricing);

updatePricing();
