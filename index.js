
const exec = require('child_process').exec;
console.log('get access token')
console.log(exec('az account get-access-token'))