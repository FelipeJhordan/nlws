import knex from 'knex';
const PASSWORD = require('../../src/.database_password.js');
const connection = knex({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : PASSWORD,
        database : 'database'
    },
    useNullAsDefault: true
});

export default connection;