
function generateMetadata(story, sku) {
  return {
    filenamePrefix: story + "_" + sku,
    title: story + " - " + sku,
    description: "Auto-generated description for " + sku,
    keywords: story + ", " + sku
  };
}

module.exports = { generateMetadata };
