var mysql = require('mysql');

var config = {
    user: 'root',
    password: 'root',
    database: '1609a_zk3',
    connectionLimit: 100
}
var pool = mysql.createPool(config);
module.exports = function(sql, query, fn) {
    pool.getConnection(function(err, con) {
        if (err) {
            fn(err)
        } else {
            con.query(sql, query, function(err, results) {
                if (err) {
                    fn(err)
                } else {
                    fn(null, results)
                }
            })
        }
    })
}