var express = require('express');
var router = express.Router();

/!* GET users listing. *!/
router.get('/', function(req, res, next) {
    res.render('photoAlbum',{
        title:'关于'
    });
});

module.exports = router;