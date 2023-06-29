CREATE DATABASE ESTUDIANTES;

USE ESTUDIANTES;

CREATE TABLE
    ESTUDIANTES(
        Nombre VARCHAR(50),
        Rut VARCHAR(50),
        CURSO VARCHAR(50),
        Nivel VARCHAR(50)
    );

INSERT INTO ESTUDIANTES
VALUES (
        'Brian May',
        '12.345.678-9',
        'guitarra',
        '1'
    );

SELECT * FROM ESTUDIANTES;