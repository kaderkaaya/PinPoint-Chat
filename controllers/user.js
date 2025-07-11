const UserService = require('../services/user')

class UserController {
 static async signUp(req, res, next){
    try {
        const { name, surname, mssidn, profileImage } = req.body;
          const user = await UserService.signUp({ name, surname, mssidn, profileImage });
          return res.status(200).json({ message:'User Created successfully',user})
    } catch (error) {
        return res.status(500).json({error: `${error}`})
    }
 }
 static async signIn(req,res){
    try {
        const { mssidn } = req.body;
        const user = await UserService.signIn({ mssidn });
        return res.status(200).json({message:'User signed successfully', user})
    } catch (error) {
        return res.status(500).json({error:`${error}`})
    }
 }
 static async deleteAccount(req, res){
    try {
    const {userId} = req.body;
    const user = await UserService.deleteAccount({userId}, { new: true });
    return res.status(200).json({message:'User deleted successfully',user})
    } catch (error) {
        return res.status(500).json({error:`${error}`}) 
    }
 }
 static async  getProfile(req, res){
   try {
    const { userId } = req.query;
    const user = await UserService.getProfile({userId})
    return res.status(200).json({message:'User Profiile:',user})
   } catch (error) {
    return res.status(500).json({error:`${error}`}) 
   }
 }
}
module.exports = UserController;