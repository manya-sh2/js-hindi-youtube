const accountId = 12345
let accountEmail = "abs@gmail.com"
var accountPassword = "123"
accountCity = "Jaipur"
let accountState;
// accountId = 2 //not allowed

accountEmail = "qwerty@gmail.com"
accountPassword = "987"
accountCity = "Bengaluru"

// prefer not to use var because of issue of block and functional scope

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])