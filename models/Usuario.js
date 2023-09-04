import bcrypt from 'bcrypt';
import pool from '../config/db.js';


const User = {
  async create(nombre, password, email,curp) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const [result] = await pool.query(
      'INSERT INTO usuarios (nombre, password, email,curp) VALUES (?, ?, ?,?)',
      [nombre, hashedPassword, email,curp]
    );

    return result.insertId;
  },
  async findByToken(token) {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE token = ?', [token]);
    return rows.length ? rows[0] : null;
  }
  ,

  async findByEmail(email) {
    const [result] = await pool.query(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );

    return result.length ? result[0] : null;
  },
  async findUserById(userId) {
    const [rows] = await pool.query('SELECT id, nombre, email,foro,rol FROM usuarios WHERE id = ?', [userId]);
    return rows.length ? rows[0] : null;
  },

  async comparePassword(passwordForm, hashedPassword) {
    return await bcrypt.compare(passwordForm, hashedPassword);
  },
};

export default User;
