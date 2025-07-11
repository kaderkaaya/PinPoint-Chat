const UserDataAccess = require('../data-access/user')
const TokenService = require('../services/token');
const { USER_STATUS } =require('../constants/cons')
class UserService {
 static async signUp({ name, surname, mssidn, profileImage}){
    return await UserDataAccess.signUp({name, surname, mssidn, profileImage})
 }
 static async signIn({ mssidn }){
    const user = await UserDataAccess.findUser({ mssidn });
    if(!user){
       throw new Error('User not found')
    }
    const token = await TokenService.generateToken({id : user._id});
    
     await UserDataAccess.saveToken({id :user._id, token})
     return {
             token,
             ...user.toJSON(),
            }
 }
 static async deleteAccount({userId}){
   const user = await UserDataAccess.findUserById({userId });
   console.log('user',user)
   if(user){
       return UserDataAccess.deleteAccount({userId})
   }
 }
 static async getProfile({userId}){
   const user = await UserDataAccess.findUserById({userId})
   if(user && user.status === USER_STATUS.ACTIVE){
      return user;
   }
 }
}
module.exports = UserService;