import { pool } from '../db.js'

const { nombre, rut, curso, nivel } = {
  nombre: 'juan',
  rut: '12345678-9',
  curso: 'ingenieria',
  nivel: '2'
}

export async function addUserQuery(sql) {
  const [result] = await pool.query(sql, [nombre, rut, curso, nivel])
  console.log(result)
  return result
}
