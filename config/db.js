// CONNECT DB
const { Pool } = require('pg')
const pool = new Pool({
    host: 'localhost',
    port: 5433,
    database: 'bank',
    user: 'postgres',
    password: 'ceunike1605',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})

//CARA BARU
module.exports = pool;


//CARA LAMA CONNECT DB 
//awalnya variabel const diatas pake client, new Client


// async function connectDB(){
//     await client.connect()
//     const res = await client.query(
//         // 'Select $1::text as message, $2::int as number',  
//         // ['Hello World!', 1234]
//         'Select * from akun'
//     )

//     //bisa jg res.rows[0].message
//     console.log(res.rows)
//     await client.end()
// }

// connectDB()