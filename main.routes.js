import express from 'express';
import i18n from 'i18n-abide';

const router = express.Router({mergeParams: true});

router.use((req, res, next) => {
    // res.redirect(`/${req.lang}`);
    next();
})

router.get('/', (req, res) => {
    res.render('index', { locales: i18n.getLocales(), currPath: req.path });
})
router.get('/about', (req, res) => {
    res.render('about', { locales: i18n.getLocales(), currPath: req.path });
})

export default router;
