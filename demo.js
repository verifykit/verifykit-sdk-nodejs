const VerifyKit = require('verifykit')

const verifyKit = new VerifyKit("server_key");

verifyKit.validate('session_id').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error)
});
