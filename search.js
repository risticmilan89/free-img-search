const open = require("open");
const prompt = require("prompt-sync")();

const formatBase = (joinWith) => (text) => {
  const textParts = text.split(" ");
  if (textParts.length === 1) {
    return text;
  }
  return textParts.join(joinWith);
};

const formatT = {
  unsplash: formatBase("-"),
  pixabay: formatBase("%20"),
  burst: formatBase("+"),
};

const imgUrls = [
  ["https://unsplash.com/s/photos/", ""],
  ["https://pixabay.com/images/search/", "/"],
  ["https://www.pexels.com/search/", "/"],
  ["https://burst.shopify.com/photos/search?utf8=%E2%9C%93&q=", "&button="],
];

const searchParam = prompt("Search for: ");

if (searchParam) {
  const unsplashSearch = imgUrls[0].join(formatT.unsplash(searchParam));
  const pixabaySearch = imgUrls[1].join(formatT.pixabay(searchParam));
  const pexelsSearch = imgUrls[2].join(formatT.pixabay(searchParam));
  const burstSearch = imgUrls[3].join(formatT.burst(searchParam));

  const searches = [unsplashSearch, pixabaySearch, pexelsSearch, burstSearch];

  for (const search of searches) {
    open(search);
  }
}
