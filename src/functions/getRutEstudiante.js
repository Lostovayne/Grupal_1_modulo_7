import { pool } from '../db.js'

const rutEstudiante = '12345678-9'

export async function getRutEstudianteQuery(sql) {
  try {
    const [result] = await pool.query(sql, [rutEstudiante])
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}
