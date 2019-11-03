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
const querystring = require('querystring');
const zlib = require('zlib');



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
    console.log(' -- spotifyRequest', params);

    return new Promise((resolve, reject) => {
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate"
        };

        const body = querystring.stringify(params);
        const options = {
            method: 'POST',
            headers,
            body
        };

        console.log('Options', options);

        fetch(
            API_URL,
            options
        ).then(res => {
            console.log(res)
            const test = {
                "access_token": "BQC4r7OQGwNDOw4KvSKHNoL_3U_l-PDQbYNHI2-B0Bj7f-TjlCDrHRHcSuLSx8R6Db0Vj00h6xHQqaV9eZEda4HuxDitjBlcKnuHv86RaWPHFYqsriV1jn_0i9YOqD9Bw-AHHLdBUT-Gfm26_pXwO9dx5IBjqZoQXHozkuvYbhH-W9rsaV6i41ThYu_1",
                "token_type": "Bearer",
                "expires_in": 3600,
                "refresh_token": "AQCA_xPLreXRRcSBcWSO0TDGOwTTPnYS9vNtBMrKFgoLJMn0cGeszmf23kosugwG2VM5kwH4ok3rO806C82AKAAfJcTP-koVfr3faiAl39dzl671QsM5weg7GXBLGQaORnSU6A",
                "scope": "playlist-read-private streaming user-read-email user-read-private user-top-read"
            }
            resolve({
                statusCode: 200,
                body: test
            });
            /*
            zlib.inflate(JSON.stringify(res), (err, result) => {
                if(err) {
                    reject(err)
                }
                console.log('Response to return', result);
                resolve(result);
            });*/
        }).catch(err => {
            console.log('¡!Err', err)
            reject(err);
        })
    })
        .then(resp => {
            console.log('Resp', resp.body);
            console.log('Status code', resp.statusCode);
            if (resp.statusCode != 200) {
                console.log('Status code')
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
    const params = req.body;
    console.log('params', params)
    const formData = querystring.parse(params)
    console.log('form', formData)
    request.post(API_URL, {
        form: params
    }, (err, respuesta, body) => {
        if(err) {
            res.send({err});
        } else {
            res.send(body);
        }
    });
});



// Get a new access token from a refresh token
app.post('/refresh', (req, res) => {

});

app.get('/', (req, res) => {
    res.send({
        message: 'All working fine :)'
    })
})

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