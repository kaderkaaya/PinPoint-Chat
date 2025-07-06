const UserDataAccess = require('../data-access/user')
const TokenService = require('../services/token');
const code = '0508';
class UserService {
 static async signUp({ name, surname, mssidn, profileImage ,mail}){
    return await UserDataAccess.signUp({name, surname, mssidn, profileImage, mail})
 }
 static async signIn({ mssidn, mail }){
    const user = await UserDataAccess.findUser({ mssidn });
    const token = await TokenService.generateToken({id : user._id});
    
     await UserDataAccess.saveToken({id :user._id, token})
     return {
             token,
             ...user,
            }
 }
}
module.exports = UserService;