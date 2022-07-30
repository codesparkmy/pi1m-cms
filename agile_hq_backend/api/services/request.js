const request = require('request');


const getCallRequestApi = (urls, callback) => {
    request(urls, { json: true }, (err, res, body) => {
        if (err) {
            return callback(err);
        }
        return callback(body);
    });
}


const getPostRequestApi = (urls, jsonBody, callback) => {
    request.post({ url: urls, body: JSON.stringify(jsonBody) }, (err, res, body) => {
        if (err) {
            return callback(err);
        }
        return callback(body);
    });

}




module.exports.callRequestApi = getCallRequestApi;
module.exports.callRequestPostApi = getPostRequestApi;