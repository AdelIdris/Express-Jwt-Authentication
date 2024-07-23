const base64url = require('base64url');
const crypto =require('crypto');
const signatureFunction = crypto.createSign('RSA-SHA256');
const verifyFunction = crypto.createVerify('RSA-SHA256');
const fs = require('fs');


const headerObj ={
    "alg":"HS256",
    "typ":"JWT"
};
const payloadObj={
    "sub":"1234567890",
    "name":"John Doe",
    "iat":1516239022
};

const headerObjSting = JSON.stringify(headerObj);
const payloadObjString = JSON.stringify(payloadObj);

const base64UrlHeader = base64url(headerObjSting);
const base64UrlPayload = base64url(payloadObjString);

signatureFunction.write(base64UrlHeader+ '.' + base64UrlPayload);
signatureFunction.end();
const PRIV_KEY =fs.readFileSync(__dirname + '/priv_key.pem', 'utf8');
const signatureBase64 = signatureFunction.sign(PRIV_KEY, 'base64');

const signatureBaseUrl =base64url.fromBase64(signatureBase64);

console.log(signatureBaseUrl);

// END ISSUANCE

/**
 * VERIFICATION
 */




const JWT ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


const jwtParts = JWT.split('.');

const headerInBase64UrlFormat =jwtParts[0];
const payloadInBase64UrlFormat =jwtParts[1];
const signatureInBase64UrlFormat = jwtParts[2];f

verifyFunction.write(headerInBase64UrlFormat + '.' +payloadInBase64UrlFormat);
verifyFunction.end();

const jwtSignaturBase64 = base64url.toBase64(signatureInBase64UrlFormat);

const PUB_KEY =fs.readFileSync(__dirname + '/pub_key.pem', 'utf8');

const signatureIsValid = verifyFunction.verify(PUB_KEY,jwtSignaturBase64, 'base64');
console.log(signatureIsValid);

