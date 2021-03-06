const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === "production"
let pool;
if (isProduction){
    pool = new Pool({
        connectionString:process.env.DATABASE_URL,
        ssl: {rejectUnauthorized: false },
    });
}else{
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'crown_16',
        password: '0000',
        port: '5432',
    });
}

pool.query('SELECT * from crown_16', (err, res) => {
   console.log(JSON.stringify(res.rows));
   pool.end();
})

module.exports = pool;

// postgres://eqkyfvlmfmhrfp:d90cb4b36d58396381943d039a83f73c5d8403404133a22cd15a586ec6017520@ec2-52-87-123-108.compute-1.amazonaws.com:5432/ddq5gan3963crt