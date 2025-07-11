const ChatService = require('../services/chat');

class ChatController {
    static async addUserToChat(req, res, next) {
        try {
            const { userId, friendId } = req.body;
            const chat = await ChatService.addUserToChat({ userId, friendId });
             return res.status(200).json({message: 'User added to chat successfully',chat});
        } catch (error) {
            return res.status(500).json({error: `${error}`})
        }
    }
}
module.exports = ChatController;