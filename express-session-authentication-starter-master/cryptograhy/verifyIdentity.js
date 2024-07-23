const crypto = require('crypto');
const fs = require('fs');
const decrypt =require('./decrypt');
const receivedData = require('./signMessage').packageOfDataToSend;

const hash = crypto.createHash(receivedData.algorithm);

const publicKey =fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

const decryptedMessage = decrypt.decryptWithPublicKey(publicKey, receivedData.signedAndEncryptedData);

const decryptedMessageHex = decryptedMessage.toString();

const hashOfOriginal = hash.update(JSON.stringify(receivedData.originalData));

const hashOfOriginalHex = hash.digest('hex');

if(hashOfOriginalHex === decryptedMessageHex){

console.log("Success! the Data has not been tampered with an the4 sender is valid");
}
else {
console.log('uh oh... someone is trying to manupulate the data ');
}
