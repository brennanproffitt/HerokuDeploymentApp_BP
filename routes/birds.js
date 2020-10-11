var express = require('express');
var router = express.Router();
var birdsController = require('../controllers/birdsController');

/* GET home page. */
router.get('/', birdsController.get_birds);

router.get('/create/conf', birdsController.get_birds_create_conf);

router.get('/create', birdsController.get_birds_create);

router.post('/create', birdsController.post_birds_create);

module.exports = router;