const db = require("../utils/databasepg");

module.exports = class Pricelist {
  constructor() {}

  static async findAllPricelistItems() {
    const result = await db.query(`
        SELECT *
        FROM zenit.pricelist
        ORDER BY created_at DESC
      `);

    return result.rows;
  }
};
