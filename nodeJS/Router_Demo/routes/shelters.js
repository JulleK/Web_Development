const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("ALL SHELTERS")
})
router.post('/', (req, res) => {
    res.send("CREATING SHELTER")
})
router.get('/:id', (req, res) => {
    res.send("VIEWING ONE SHELTER")
})
router.get('/:id/edit', (req, res) => {
    res.send("EDITING A SHELTER")
})

module.exports = router;