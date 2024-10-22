import { Pool } from 'pg';

const pool = new Pool({
  user: 'jorgebush',
  host: 'localhost',
  database: 'departments',    // Replace with your PostgreSQL database name
  password: '',    // Replace with your PostgreSQL password
  port: 5432                    // Default PostgreSQL port
});

export default pool;