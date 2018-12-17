var express = require('express');
var router = express.Router();

/* GET home page. */

var query = require('../mysql');
var sql = require('../mysql/sql');

router.get('/api/get/train_tickets', function(req, res, next) {
    query(sql.SELECT_ALL, function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: '请求成功', data: result })
        }
    })
});

module.exports = router;