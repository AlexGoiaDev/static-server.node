const 
    express = require('express'),
    router = express.Router(),
    request = require('request');

router.route('/auth')
    .post(async (req, res) => {
        try {
            const result = request() ;

        } catch(err) {
            res.status(500).send(err);
        }
    });
module.exports = {

};