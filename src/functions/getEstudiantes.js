import { pool } from '../db.js'

export async function getEstudiantesQuery(sql) {
  const [result] = await pool.query(sql)
  console.log(result)
  return result
}
