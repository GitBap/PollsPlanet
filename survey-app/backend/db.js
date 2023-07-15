import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new pg.Pool({
  host: process.env.DATABASE_HOST,
  port: 5432,
  database: process.env.DATABASE,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

export default pool;
