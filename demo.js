const VerifyKit = require('verifykit')

const verifyKit = new VerifyKit("server_key");

// validate sessionId
verifyKit.validate('session_id').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error)
});

// get web access token to use VerifyKit on web platforms
verifyKit.getWebAccessToken().then(response => {
    console.log(response);
}).catch(error => {
    console.log(error)
});
