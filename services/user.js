const UserDataAccess = require('../data-access/user')
const TokenService = require('../services/token');
const code = '0508';
class UserService {
 static async signUp({ name, surname, mssidn, profileImage}){
    return await UserDataAccess.signUp({name, surname, mssidn, profileImage})
 }
 static async signIn({ mssidn }){
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