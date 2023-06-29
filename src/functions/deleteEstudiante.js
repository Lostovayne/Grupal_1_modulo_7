import { pool } from '../db.js'

const deleteEstudiante = '12.345.678-9'

export async function deleteUserQuery(sql) {
  try {
    const [result] = await pool.query(sql, [deleteEstudiante])
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}
