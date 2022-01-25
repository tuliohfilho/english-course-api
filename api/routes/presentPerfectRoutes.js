const router = require('express').Router();

const {
    getAll
} = require('../controllers/presentPerfectController');


router.get('/', getAll);

module.exports = router;