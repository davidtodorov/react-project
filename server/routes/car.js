const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');


router.post('/add', auth(), controllers.car.post.add);

router.get('/', controllers.car.get);

// router.post('/login', controllers.user.post.login);
//
// router.post('/logout', controllers.user.post.logout);
//
// router.put('/:id', controllers.user.put);
//
// router.delete('/:id', controllers.user.delete);

module.exports = router;