import { addUserQuery } from './functions/addUserQuery.js'
import { getEstudiantesQuery } from './functions/getEstudiantes.js'
import { getRutEstudianteQuery } from './functions/getRutEstudiante.js'
import { updateEstudiantesQuery } from './functions/updateEstudiante.js'
import { deleteUserQuery } from './functions/deleteEstudiante.js'

// insert user
const insertEstudiantesQuery = `INSERT INTO estudiantes (nombre, rut, curso , nivel) VALUES (?, ?, ?,?)`
// obtener todos los estudiantes
const getEstudientesQuery = `SELECT * FROM estudiantes`
// obtener por consola el registro de un estudiante por medio de su rut.
const getRutEstudiante = `SELECT * FROM estudiantes WHERE rut = ?`

// actualizar el nivel de un estudiante
const updateEstudiantes = `UPDATE estudiantes SET nivel = ? WHERE rut = ?`
// delete un estudiante
const deleteEstudiante = `DELETE FROM estudiantes WHERE rut = ?`

// addUserQuery
addUserQuery(insertEstudiantesQuery)

//getEstudents
getEstudiantesQuery(getEstudientesQuery)

//getRutEstudiante
getRutEstudianteQuery(getRutEstudiante)

//updateEstudiantes
updateEstudiantesQuery(updateEstudiantes)

//deleteEstudiante
deleteUserQuery(deleteEstudiante)
