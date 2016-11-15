const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Call Yo Rep' });
});

router.post('/dothething', (req, res, next) => {
  // TODO: use address + scope to get rep info
  // TODO: pass along the concern to the template, preformat msg there
});

module.exports = router;
