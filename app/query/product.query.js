module.exports = {
  fetchProduct: (tenantId) =>
    `SELECT p.*, i.* FROM Product p
    LEFT JOIN Image i ON i.productId = p.id
    WHERE storeId = '${tenantId}'`,
};
