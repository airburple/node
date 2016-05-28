var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('event_list', { title: 'Events',
        name: 'Aaron'


    });
});

module.exports = router;
