import { pool } from '../db.js'

const updateEstudiante = '12345678-9'
const nivel = '9'

export async function updateEstudiantesQuery(sql) {
  try {
    const [result] = await pool.query(sql, [nivel, updateEstudiante])
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}
