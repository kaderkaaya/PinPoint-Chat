const express = require('express');
const router = express.Router();
const {
    addUserToChat,
    createGroup,
    addUserToGroup,
    removeUserFromGroup,
    leaveGroup,
    deleteGroup,
    getGroupMessages,
} = require('../controllers/chat');
router.post('/add-user-to-chat', addUserToChat);
// router.post('/create-group', createGroup);
// router.post('/add-user-to-group', addUserToGroup);
// router.post('/remove-user-from-group', removeUserFromGroup);
// router.post('/leave-group', leaveGroup);
// router.post('/delete-group', deleteGroup);
// router.post('/get-group-messages', getGroupMessages);
// router.post('/get-group-info', getGroupInfo);
// router.post('/get-group-members', getGroupMembers);
// router.get('/get-chats', getChats);

module.exports = router;