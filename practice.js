let email = 'kaizerverdeentrata@gmail.com';

let emailName = email.slice(0, email.indexOf('@'));
let emailDomain = email.slice(email.indexOf('@'));

console.log('Email Name : ' + emailName);
console.log('Email Domain : ' + emailDomain);