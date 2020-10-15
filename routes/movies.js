const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const moviesValidator = require('../validators/moviesValidator');

router.get('/list',moviesController.list)
router.get('/',moviesController.all)
router.get('/detail/:id',moviesController.detail);
router.get('/new',moviesController.new);
router.get('/recommended',moviesController.recommended);

router.post('/search',moviesController.search);

router.get('/create',moviesController.create);
router.post('/create',moviesValidator, moviesController.save);

router.get('/edit/:id',moviesController.edit)

module.exports = router