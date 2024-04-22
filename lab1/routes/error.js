const express = require('express');
const router = express.Router();
const errorController = require('../controllers/error');

// Ustaw router do obsługi błędów 404
router.use((req, res, next) => {
res.status(404).render('not-found', { title: 'Page Not Found' });
});

module.exports = router;