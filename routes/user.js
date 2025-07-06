const express = require('express');
const router = express.Router();

const { signUp,
       signIn, 
       DeleteAccount, 
       editProfile ,
       getProfile } = require('../controllers/user');

router.post('/signUp',signUp);       
router.post('/signIn',signIn);       
// router.post('/DeleteAccount',DeleteAccount);       
// router.post('/editProfile',editProfile);       
// router.post('/getProfile',getProfile);       

module.exports = router;