const { Pool } = require("pg")

module.exports = new Pool({
<<<<<<< HEAD
    user: 'postgres',
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
=======
    user:"postgres",
    password:"postgres",
    host:"localhost",
    port:5432,
    database:"gymmanager"
>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83
})