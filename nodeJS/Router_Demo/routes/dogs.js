const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("ALL DOGS")
})
router.get('/:id', (req, res) => {
    res.send("VIEWING VERY SPECIAL DOGGGG!")
})
router.get('/:id/edit', (req, res) => {
    res.send("EDITING DOOGGOO")
})


module.exports = router;