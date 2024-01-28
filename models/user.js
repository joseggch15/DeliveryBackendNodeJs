const db = require ('../config/config.js');


const User = {};


// se crea el metodo para obtener datos 
User.getAll = () => {
    const sql = 
    `
    SELECT 
        *
    FROM
        users
    `;

    return db.manyORNone(sql);
}

module.exports = User;



