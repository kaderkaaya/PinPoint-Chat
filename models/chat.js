const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    message: {
        type: String,
    },
    groupId: {
        type: String,
    },
    users: {
        type: Array,
    },
    isRead: {
        type: Boolean,
    },
    isDeleted: {
        type: Boolean,
    },
    isGroup: {
        type: Boolean,
        default: false
    },
    status: {
        type: Number,
        default:0
    }
},
{ timestamps: {
    createdAt: 'createdAt',
    updatedAt :'updatedAt',
}
 
})

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;