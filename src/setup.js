const { API_KEY, CLIENT_ID, CLIENT_SECRET } = require('../config.js');

const hellosign = require('hellosign-sdk')({ key: API_KEY, client_id: CLIENT_ID, client_secret: CLIENT_SECRET });

// verifies whether a new user of the app already has a hellosign account.
// roadblock - this endpoint requires a paid plan and does not have a test mode parameter.
const verifyAccount = (email) => {
  return hellosign.account.verify({ email_address: email })
    .then((res) => {
      console.log('response', res);
    })
    .catch((err) => {
      console.error(err);
    })
};

const refreshAuthToken = () => {
  return hellosign.oauth.refreshToken({
    grant_type: 'refresh_token',
    refresh_token: '123456'
  })
  .then((response) => {
    console.log('response', response);
  })
  .catch((err) => {
    console.error(err);
  })
};

// console.log(refreshAuthToken());

const getToken = (state, code) => {
  return hellosign.oauth.getToken({
    state, code
  })
  .then((res) => {
    console.log('oauth token: ', res);
  })
  .catch((err) => {
    console.error(err);
  })
};

console.log(getToken('9272a9f4', 'c9eacc3a6d6cf4ba'));

// callback data: code=8f49424835a8f5df&state=test3

// new callback data: code=c9eacc3a6d6cf4ba&state=9272a9f4
