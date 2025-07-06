const UserService = require('../services/user')

class UserController {
 static async signUp(req, res, next){
    try {
        const { name, surname, mssidn, profileImage,mail } = req.body;
          const user = await UserService.signUp({ name, surname, mssidn, profileImage, mail });
          return res.status(200).json({ message:'User Created successfully',user})
    } catch (error) {
        return res.status(500).json({error: `${error}`})
    }
 }
 static async signIn(req,res){
    try {
        const { mssidn, mail } = req.body;
        const user = await UserService.signIn({ mssidn, mail });
        return res.status(200).json({message:'User signed successfully', user})
    } catch (error) {
        return res.status(500).json({error:`${error}`})
    }
 }
}
module.exports = UserController;