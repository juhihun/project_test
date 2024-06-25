var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express',username:'홍길동' });
  //localhost 뒤 prod 안쳐도 넘어감
  //res.redirect('/prod')
  //객체나 텍스트 넘김
  //res.send('helllllllllllllllo');



});




module.exports = router;


