export const PressReleaseContentTypeOptions = [
  { value: "press release", label: "Press Release" },
  { value: "news", label: "News" },
];
export const NewsCategoryOptions = [
  { value: "cryptocurrencies", label: "Cryptocurrencies" },
  { value: "exchanges", label: "Exchanges" },
  { value: "mining", label: "Mining" },
  { value: "gaming", label: "Gaming" },
  { value: "ai-big-data", label: "AI & Big Data" },
];

export const PressReleaseContentForOptions = [
  { value: "all", label: "All Users" },
  { value: "paid", label: "Premium" },
];

export const mapOptionsToSelect = (options) => {
  return options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
};

export const banneSizes = [
  {
    value: "Leaderboard",
    label: "Leaderboard: 728 x 90 pixels",
    width: 728,
    height: 90,
  },
  {
    value: "Large rectangle",
    label: "Large rectangle: 336 x 280 pixels",
    width: 336,
    height: 280,
  },
  {
    value: "Medium rectangle",
    label: "Medium rectangle: 300 x 250 pixels",
    width: 300,
    height: 250,
  },
  {
    value: "Mobile banner",
    label: "Mobile banner: 300 x 50 pixels",
    width: 300,
    height: 50,
  },
  {
    value: "Wide skyscraper",
    label: "Wide skyscraper: 160 x 600 pixels",
    width: 160,
    height: 600,
  },
  {
    value: "Vertical banner",
    label: "Vertical banner: 120 x 240 pixels",
    width: 120,
    height: 240,
  },
  {
    value: "Portrait image",
    label: "Portrait image: 300 x 1050 pixels",
    width: 300,
    height: 1050,
  },
  {
    value: "Large full banner",
    label: "Large full banner: 970 x 90 pixels",
    width: 970,
    height: 90,
  },
  {
    value: "Button",
    label: "Button: 125 x 125 pixels",
    width: 125,
    height: 125,
  },
];

export const bannerSizeValues = {
  Leaderboard: { width: 728, height: 90 },
  "Large rectangle": { width: 336, height: 280 },
  "Medium rectangle": { width: 300, height: 250 },
  "Mobile banner": { width: 300, height: 50 },
  "Wide skyscraper": { width: 160, height: 600 },
  "Vertical banner": { width: 120, height: 240 },
  "Portrait image": { width: 300, height: 1050 },
  "Large full banner": { width: 970, height: 90 },
  Button: { width: 125, height: 125 },
};
