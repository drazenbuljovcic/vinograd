import express from 'express';
import i18n from 'i18n-abide';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { locales: i18n.getLocales(), currPath: req.path });
})
router.get('/services', (req, res) => {
    res.render('services', { locales: i18n.getLocales(), currPath: req.path });
})
router.get('/tourism', (req, res) => {
    res.render('tourism', { locales: i18n.getLocales(), currPath: req.path });
})
router.get('/health', (req, res) => {
    res.render('health', { locales: i18n.getLocales(), currPath: req.path });
})
export default router;
