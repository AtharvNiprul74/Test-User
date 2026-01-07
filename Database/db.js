const mysql2 = require("mysql2")

console.log(
    process.env.MYSQLHOST,
    process.env.MYSQLUSER,
    process.env.MYSQLPASSWORD,
    process.env.MYSQLDATABASE,
    process.env.MYSQLPORT
)

const pool = mysql2.createPool({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASSWORD,
    database:process.env.MYSQLDATABASE,
    port:process.env.MYSQLPORT
})

module.exports = pool