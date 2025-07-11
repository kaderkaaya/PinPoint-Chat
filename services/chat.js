const ChatDataAccess = require('../data-access/chat');

class ChatService {
    static async addUserToChat({ userId,friendId }) {
        const chat = await ChatDataAccess.addUserToChat({ userId,friendId });
        return chat;    
    }
}
module.exports = ChatService;