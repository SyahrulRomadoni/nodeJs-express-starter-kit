// app/routes

const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const {
    index,
    read,
    updated,
    deleted
} = require('../controllers/roleController');

const router = express.Router();

router.get('/', authenticateToken, index);
router.get('/:uuid', authenticateToken, read);
router.put('/:uuid', authenticateToken, updated);
router.delete('/:uuid', authenticateToken, deleted);

module.exports = router;