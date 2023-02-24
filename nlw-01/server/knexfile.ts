import path from 'path';
const PASSWORD = require('./src/.database_password.js');
console.log(PASSWORD);
module.exports = {
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : PASSWORD,
        database : 'database'
    },
    useNullAsDefault: true,
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: { 
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
}