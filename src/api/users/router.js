const express = require('express');
const router = express.Router();


router.route('/')
  .get((req, res, next) => {                  // Get users
    res.send('respond with a resource');
    // TODO: make implementation
  })
  .post((req, res, next) => {                 // Create user
      // TODO: make user saving
  });

router.route('/:id')
  .get((req, res, next) => {                  // Get user by id
    res.send('get user by id');
    // TODO: make implementation
  })
  .put((req, res, next) => {                  // Update user by id
    // TODO: make implementation
  })
  .delete((req, res, next) => {               // Delete user by id
    // TODO: make implementation
  });


module.exports = router;
