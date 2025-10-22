const express = require('express');
const router = express.Router();
const db = require('../db');
// Obtener todos los estudiantes
router.get('/', (req, res) => {
    db.query('SELECT * FROM estudiantes', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Obtener estudiante por documento
router.get('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    db.query('SELECT * FROM estudiantes WHERE documento_identidad = ?',
        [doc], (err, results) => {
            if (err) return res.status(500).json({ error: err });
            if (results.length == 0)
                return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
            res.json(results[0]);
        });
});

router.delete('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    db.query('DELETE FROM estudiantes WHERE documento_identidad = ?',
        [doc], (err, results) => {
            if (err) return res.status(500).json({ error: err });
            if (results.length == 0)
                return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
            res.json(results[0]);
        });
});

// Crear un nuevo estudiante
router.post('/', (req, res) => {
    const { primer_nombre, segundo_nombre, apellido, fecha_nacimiento, documento_identidad, genero } = req.body;

    if (!primer_nombre || !apellido || !fecha_nacimiento || !documento_identidad || !genero) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    db.query(
        'INSERT INTO estudiantes (primer_nombre, segundo_nombre, apellido, fecha_nacimiento, documento_identidad, genero) VALUES (?, ?, ?, ?, ?, ?)',
        [primer_nombre, segundo_nombre || null, apellido, fecha_nacimiento, documento_identidad, genero],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ mensaje: 'Estudiante creado correctamente', documento_identidad });
        }
    );
});

// Actualizar un estudiante existente
router.put('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    const { primer_nombre, segundo_nombre, apellido, fecha_nacimiento, genero } = req.body;

    db.query(
        'UPDATE estudiantes SET primer_nombre = ?, segundo_nombre = ?, apellido = ?, fecha_nacimiento = ?, genero = ? WHERE documento_identidad = ?',
        [primer_nombre, segundo_nombre || null, apellido, fecha_nacimiento, genero, doc],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            if (result.affectedRows === 0)
                return res.status(404).json({ mensaje: 'Estudiante no encontrado' });

            res.json({ mensaje: 'Estudiante actualizado correctamente' });
        }
    );
});



module.exports = router;