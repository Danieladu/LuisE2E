
const { execSync } = require("child_process");
console.log('get access token')
console.log(execSync('az account get-access-token'))