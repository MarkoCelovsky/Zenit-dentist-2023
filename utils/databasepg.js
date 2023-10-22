const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "zenituser40",
  port: 5432,
  database: "zenitSK40",
  password: "zenitpass40",
});

module.exports = pool;
