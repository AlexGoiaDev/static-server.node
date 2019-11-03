const
    cors = require('cors'),
    express = require('express'),
    compression = require('compression'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    request = require('request'),
    CryptoJS = require('crypto-js');
const fetch = require('node-fetch');


const PORT = process.env.PORT || 3000;
const API_URL = "https://accounts.spotify.com/api/token";
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CLIENT_CALLBACK_URL = process.env.CLIENT_CALLBACK_URL;
const ENCRYPTION_SECRET = process.env.ENCRYPTION_SECRET;

app.use(compression());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.static(path.join(__dirname + '/static')));

const spotifyRequest = params => {
    console.log('spotifyRequest', params);
    return new Promise((resolve, reject) => {
        const authorization = {
            "Authorization": "Basic " + Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString('base64')
        };
        console.log('Authorization', authorization)
        fetch(API_URL, {
            method: 'POST',
            headers: authorization,
            form: params
        }).then(res => {
            console.log('Res', res)
            resolve(res);

        }).catch(err => {
            console.log('¡!Err', err)
            reject(err);
        })
    })
        .then(resp => {
            console.log('Resp', resp)
            if (resp.statusCode != 200) {
                return Promise.reject({
                    statusCode: resp.statusCode,
                    body: resp.body
                });
            }
            return Promise.resolve(resp.body);
        })
        .catch(err => {
            console.log('Err', err)
            return Promise.reject({
                statusCode: 500,
                body: JSON.stringify({})
            });
        });
};

// Route to obtain a new Token
app.post('/exchange', (req, res) => {
    console.log('!!!! Obtain a new token')
    const params = req.body;
    if (!params.code) {
        return res.json({
            "error": "Parameter missing"
        });
    }

    spotifyRequest({
        grant_type: "authorization_code",
        redirect_uri: CLIENT_CALLBACK_URL,
        code: params.code
    })
        .then(session => {
            console.log('Session', session);
            let result = {
                "access_token": session.access_token,
                "expires_in": session.expires_in,
                "refresh_token": encrypt(session.refresh_token)
            };
            return res.send(result);
        })
        .catch(response => {
            console.log('!!!!! ERROR', response);
            return res.json(response);
        });
});



// Get a new access token from a refresh token
app.post('/refresh', (req, res) => {
    console.log('!!!! Refresh token')
    const params = req.body;
    if (!params.refresh_token) {
        return res.json({
            "error": "Parameter missing"
        });
    }
    spotifyRequest({
        grant_type: "refresh_token",
        refresh_token: decrypt(params.refresh_token)
    })
        .then(session => {
            return res.send({
                "access_token": session.access_token,
                "expires_in": session.expires_in
            });
        })
        .catch(response => {
            return res.json(response);
        });
});

app.get('/test', (req, res) => {
    res.send({
        test: 'Test work'
    })
});

// Helper functions
function encrypt(text) {
    return CryptoJS.AES.encrypt(text, ENCRYPTION_SECRET).toString();
};

function decrypt(text) {
    var bytes = CryptoJS.AES.decrypt(text, ENCRYPTION_SECRET);
    return bytes.toString(CryptoJS.enc.Utf8);
};

var server = app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});