var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form User' });
});

/* GET users page. */
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'ListUsers' });
});

//Method Post Form
router.post('/createUser', function (req, res) {
  var name = req.body.name;
  var surname = req.body.surname;
  var description = req.body.description;
  var title = req.body.title;
    
    res.render("users", { name: name, surname: surname, description : description, title : title });
  //res.send('Post page');
});

module.exports = router;
