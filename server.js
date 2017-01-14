'use strict';

import path from 'path';
import http from 'http';

import express from 'express';
import cookieParser from 'cookie-parser';
import i18n from 'i18next';
// import i18n from 'i18n';
import reload from 'reload';

import routes from './main.routes';

const app = express(),
    server = http.createServer(app),
    port = process.env.port || 3000;

// Middleware
app.use(cookieParser());

// I18N library

// i18n.configure({
    // locales: ['en', 'de'],
    // directory: path.join(__dirname, 'locales'),
    // register: 'global',
    // defaultLocale: 'en',  
    // cookie: 'lang',
// })
// app.use((req, res, next) => {
//   i18n.init(req, res);
//   res.locals.__ = res.__;

//   let current_locale = i18n.getLocale();
//   i18n.setLocale('de');
//   console.log("Locale", i18n.getLocale());
//   let set2 = i18n.setLocale('en');
//   console.log("Locale", i18n.getLocale());
//     console.log(i18n.__("Welcome"));
//   next();
// });

// i18n.init({
//     saveMissing: true,
//     debug: true
// });
// app.use(i18n.handle);
// i18n.registerAppHelper(app);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'public', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/en', express.static(path.join(__dirname, 'public')));
// app.use('/de', express.static(path.join(__dirname, 'public')));


// Routes
app.use('/', routes);
// app.use('/de', routes);

// app.get('*', (req, res) => res.render('404.pug'));

reload(server, app);
server.listen(port, () => console.log(`Listening on port ${port}`));
