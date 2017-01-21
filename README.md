# vinograd

Run npm run watch in parallel with npm start:dev.

The webpack watch will automatically output the js and css files to the public folder,
upon every change. That will trigger a nodemon restart, because a static file is modified.

If adding new strings to views, for the translate to work, uppon change run npm run t-extract-merge,
which will extract the translations to the locale root folder and merge the translation template
with every language available.
Next, translate every word or phrase manually and run npm run t-compile, which will compile the
translated strings to the public/i18n folder, which is used for text referencing for views.

`` colors
http://www.colourlovers.com/palette/114669/White_Wines