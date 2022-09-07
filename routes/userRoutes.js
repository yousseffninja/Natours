const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(` Tour id: ${val}`);
  next();
});

router
    .post('/signup', authController.signup)

router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
