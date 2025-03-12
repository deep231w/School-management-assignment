import pool from './db';

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS students (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      age INT NOT NULL,
      class VARCHAR(50) NOT NULL
    );
  `;

  try {
    const connection = await pool.getConnection();
    await connection.query(query);
    connection.release();
    console.log('Table created successfully');
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

createTable();
