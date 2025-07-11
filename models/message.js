const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    senderId: {
        type: String,
        ref: 'User'
    },
    receiverId: {
        type: String,
        ref: 'User'
    },
    chatId: {
        type: String,
        ref: 'Chat'             
    },
},
{ timestamps: {
    createdAt: 'createdAt',
    updatedAt :'updatedAt',
}
 
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;