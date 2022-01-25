const router = require('express').Router();

const {
    getAll
} = require('../controllers/irregularVerbsController');


router.get('/', getAll);

module.exports = router;