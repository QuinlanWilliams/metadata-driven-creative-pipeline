
function isValidSku(sku) {
  return /^[A-Z0-9-]+$/.test(sku);
}

module.exports = { isValidSku };
