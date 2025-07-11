const Chat = require('../models/chat');

class ChatDataAccess {
    static async addUserToChat({ userId, friendId }) {
        const chat = await Chat.create({
            userId,
            users: [friendId] });
        return chat;
    }
}
module.exports = ChatDataAccess;