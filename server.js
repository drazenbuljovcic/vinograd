'use strict';
import path from 'path';
import http from 'http';

import express from 'express';
import cookieParser from 'cookie-parser';
import reload from 'reload';
import i18n from 'i18n-abide';

import routes from './main.routes';

const app = express(),
    server = http.createServer(app),
    port = process.env.port || 3000;
reload(server, app);

// Middleware //
app.use(cookieParser());
// I18N library
app.use(i18n.abide({
  supported_languages: ['en', 'de'],
  default_lang: 'en',
  translation_directory: 'public/i18n',
  locale_on_url: true
}));
// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));
// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', routes);
app.get('*', (req, res) => res.render('404.ejs'));

server.listen(port, () => console.log(`Listening on port ${port}`));
