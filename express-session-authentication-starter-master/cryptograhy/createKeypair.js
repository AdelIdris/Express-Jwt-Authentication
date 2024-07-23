
const fs = require('fs');

const {
    generateKeyPairSync,
  } = require('node:crypto');
  
  const {
    publicKey,
    privateKey,
  } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
  });
    fs.writeFileSync(__dirname + '/id_rsa_pub.pem',publicKey);

    fs.writeFileSync(__dirname + '/id_rsa_priv.pem' , privateKey);

  



