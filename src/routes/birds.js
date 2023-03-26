var express = require('express');
var router = express.Router();
const formController = require('../controllers/formController'); 


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('forms/createBird')
});

router.post('/form-submit-confirm', function(req, res, next) {

  formController.form_post(req, res)
}); 

module.exports = router;
