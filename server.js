const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = "https://accounts.spotify.com/api/token";
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CLIENT_CALLBACK_URL = process.env.CLIENT_CALLBACK_URL;
const ENCRYPTION_SECRET = process.env.ENCRYPTION_SECRET;
app.use(compression());
app.use(express.static(path.join(__dirname + '/static')));

var server = app.listen(PORT, () => {
    console.log(`Static Server running on port ${PORT}`);
});