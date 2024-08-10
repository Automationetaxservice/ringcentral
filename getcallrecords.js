// PATH PARAMETERS
const accountId = '9HbuQrJrz91dX2plLImQtu';
const extensionId = '11101';

// OPTIONAL QUERY PARAMETERS
const queryParams = {
    //page: 000,
    //perPage: 000,
    //showDeleted: true
};

const SDK = require('ringcentral');
const rcsdk = new SDK({ 'server': process.env.RC_SERVER_URL, 'clientId': process.env.RC_CLIENT_ID, 'clientSecret': process.env.RC_CLIENT_SECRET });
const platform = rcsdk.platform();
platform.login({ jwt: process.env.RC_JWT }).then(() => {
    platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log`, queryParams).then((r) => {
        // PROCESS RESPONSE
    });
});