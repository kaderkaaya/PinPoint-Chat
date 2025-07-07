const express = require('express');
const router = express.Router();

const { signUp,
       signIn, 
       deleteAccount, 
       editProfile ,
       getProfile } = require('../controllers/user');

router.post('/signUp',signUp);       
router.post('/signIn',signIn);       
router.post('/deleteAccount',deleteAccount);       
// router.post('/editProfile',editProfile);       
router.get('/getProfile',getProfile);       

module.exports = router;