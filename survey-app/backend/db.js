import pg from 'pg'

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "polls_planet",
  user: "postgres",
  password: "password",
});

pool.connect()
  .then(() => {
      console.log(`Database has been connected.....`);
  })
  .catch((err) => {
    console.error("Failed to establish connection with the database:", err);
    process.exit(1); // Exit the process with 'failure' status code
  });

export default pool;
