const
    cors = require('cors'),
    express = require('express'),
    compression = require('compression'),
    app = express(),
    bodyParser = require('body-parser'),
    request = require('request'),
    PORT = process.env.PORT || 3000,
    API_URL = "https://accounts.spotify.com/api/token",
    CLIENT_ID = process.env.CLIENT_ID,
    CLIENT_SECRET = process.env.CLIENT_SECRET,
    CLIENT_CALLBACK_URL = process.env.CLIENT_CALLBACK_URL;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: true,
    credentials: true
}));

// Route to obtain a new Token
app.post('/exchange', (req, res) => {
    request.post(API_URL, {
        form: {
            grant_type: 'authorization_code',
            redirect_uri: CLIENT_CALLBACK_URL,
            code: req.body.code,
            client_secret: CLIENT_SECRET,
            client_id: CLIENT_ID
        }
    }, (err, respuesta, body) => {
        if (err) {
            res.send({ err });
        } else {
            res.send(body);
        }
    });
});

// Get a new access token from a refresh token
app.post('/refresh', (req, res) => {
    request.post(API_URL, {
        form: {
            grant_type: 'refresh_token',
            refresh_token: req.body.refreshToken
        }
    }, (err, respuesta, body) => {
        if (err) {
            res.send({ err });
        } else {
            res.send(body);
        }
    });
});


var server = app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});