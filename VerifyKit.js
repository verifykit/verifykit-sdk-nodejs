var request = require('request');

function VerifyKit(server_key) {
    this.server_key = server_key;
    this.api_version = "v1.0";
    this.api_url = "https://api.verifykit.com/";
    this.api_path = "/result";
}

VerifyKit.prototype.setApiVersion = function (api_version) {
    this.api_version = api_version;
}

VerifyKit.prototype.validate = function (sessionId) {
    const options = {
        method: 'POST',
        uri: this.api_url + this.api_version + this.api_path,
        json: true,
        headers: {
            "X-Vfk-Server-Key": this.server_key,
        },
        body: {
            "sessionId": sessionId
        }
    };
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                reject({
                    requestId: '',
                    httpStatusCode: 0,
                    errorMessage: 'Failed to validate this session id with VerifyKit.',
                    errorCode: '0'
                });
                return;
            }
            if (response.statusCode != 200) {
                reject(body.meta);
            } else {
                resolve(body.result);
            }
        });
    });
}

module.exports = VerifyKit;
