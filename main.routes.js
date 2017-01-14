import express from 'express';

import i18n from 'i18n';

const router = express.Router({mergeParams: true});

// router.get(':locale', (req, res, next) => {
//     console.log(req.params.locale);
//     res.setLocale(req.params.locale);
//     next();
// })
router.get('/', (req, res) => {
    // console.log(res.__("Welcome"));
    res.render('index');
})
router.get('/about', (req, res) => {
    res.render('about');
})

export default router;
