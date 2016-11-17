const express = require('express')
const router = express.Router()
const CivicInfo = require('../lib/civic-info')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Call Yo Rep' })
})

router.post('/dosomething', (req, res, next) => {
  CivicInfo.getHouseRep(req.param('address'))
  .then((representative) => { res.json({ representative }) })
  .catch((err) => { return res.json({ error: 'API problem!' }) })
})

module.exports = router
