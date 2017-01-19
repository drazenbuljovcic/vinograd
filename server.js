'use strict';
const path = require('path'),
      http = require('http'),
      express = require('express'),
      cookieParser = require('cookie-parser'),
      i18n = require('i18n-abide');

const app = express(),
    server = http.createServer(app),
    routes = require('./main.routes'),
    port = process.env.PORT || 3000;

if(process.env.NODE_ENV !== 'production') {
  const reload = require('reload')
  reload(server, app);
}

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
