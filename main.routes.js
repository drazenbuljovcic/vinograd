const express = require('express'),
      i18n = require('i18n-abide'),
      router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { locales: i18n.getLocales(), currPath: req.path });
})
router.get('/about', (req, res) => {
    res.render('about', { locales: i18n.getLocales(), currPath: req.path });
})

module.exports = router;
