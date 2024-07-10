const RC_SDK = require('@ringcentral/sdk').SDK
const path = require('path')
// Remember to modify the path of your .env file location!
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const CALLER       = process.env.RINGOUT_CALLER
const RECIPIENT    = process.env.RINGOUT_RECIPIENT

var rcsdk = new RC_SDK({
    'server':       process.env.RC_SERVER_URL,
    'clientId':     process.env.RC_CLIENT_ID,
    'clientSecret': process.env.RC_CLIENT_SECRET
});
var platform = rcsdk.platform();
platform.login({ 'jwt':  process.env.RC_JWT })

platform.on(platform.events.loginSuccess, () => {
  //call_ringout()
})

/*
* Place a ring-out call
*/
async function call_ringout() {
  try {
    var resp = await platform.post('/restapi/v1.0/account/~/extension/~/ring-out', {
      'from': { 'phoneNumber': CALLER },
      'to': { 'phoneNumber': RECIPIENT },
      'playPrompt': false
    })
    var jsonObj = await resp.json()
    console.log("Call placed. Call status: " + jsonObj.status.callStatus)
  } catch (e) {
    console.log("Unable to place a ring-out call.", e.message)
  }
}