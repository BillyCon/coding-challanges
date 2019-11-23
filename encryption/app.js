/*
  very basic way of encrypting/decrypting a message
*/

let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 -=!"£$%^&*()_+[];\'#,./{}:@~<>?|\\';
let key = 20;

let encrypt = (m) => {
  let cipher = '';
  for (let i in m){
    for (let j = 0; j < chars.length; j++){
      if (m[i] == chars[j]){
        if (chars.length < j + key){
          cipher += chars[(j + key) - chars.length];
        } else {
          cipher += chars[j + key];
        }
      }
    }
  }
  console.log('Encrypting...');
  console.log(cipher);
  return cipher;
}

let decrypt = (m) => {
  let text = '';
  for (let i in m){
    for (let j = 0; j < chars.length; j++){
      if (m[i] == chars[j]){
        if (0 > j - key){
          text += chars[(j - key) + chars.length];
        } else {
          text += chars[j - key];
        }
      }
    }
  }
  console.log('Decrypting...');
  console.log(text);
  return text;
}

//outputs both encrypt and decrypt for poc
decrypt(encrypt('my message'));