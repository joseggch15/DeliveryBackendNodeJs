// se hace npm i pg-promise
// se hace npm i bluebird


//esta es una configuracion pasa la base de datos
const promise = require('bluebird').promise;
const options = { // se define un objeto
    promiseLib: promise, 
    query: (e) => {
    }
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114,function(stringValue){
    return stringValue;

});

const databaseConfig = {
    'host': ' 127.0.0.1',
    'port': 5432,
    'database': 'delivery_db',
    'user': 'postgres', // verificar user db en postgres
    'password':'t00036164'
};

const db = pgp(databaseConfig);

module.exports = db;


