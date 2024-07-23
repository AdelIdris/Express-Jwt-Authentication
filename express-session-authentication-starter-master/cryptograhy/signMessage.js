const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const fs =require('fs');
const encrypt = require('./encrypt');
const decrypt = require('./decrypt');


const myData ={
firstName: 'Zach',
lastName: 'Goolwitzer',
socialSecurityNumber: 'No No no. never put personal info in a digitally signed message'
};

const myDataString = JSON.stringify(myData);

hash.update(myDataString);

const hashedData =hash.digest('hex'); 

const senderPrivateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

const signedMessage = encrypt.encryptWithPrivateKey(senderPrivateKey, hashedData);

const packageOfDataToSend = {

	algorithm: 'sha256',
	originalData: myData,
	signedAndEncryptedData: signedMessage

};

module.exports.packageOfDataToSend = packageOfDataToSend;
