// 5 buat route prodi

const express = require('express')
const router = express.Router()
const Prodi = require('../models/Prodi')


// post fakultas
router.post('/', async(req, res) => {
    const dataProdi = new Prodi({
        nama: req.body.nama,
        fakultas: req.body.fakultas
    })
    try {
        const prodi = await dataProdi.save()
        res.json(prodi)
    } catch (error) {
        res.json({message: error})
    }
})

// get fakultas
router.get('/', async(req, res)=>{
    try {
        const prodi = await Prodi.find()
        res.json(prodi)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router