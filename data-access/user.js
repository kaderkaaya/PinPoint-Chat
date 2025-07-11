const {USER_STATUS} = require('../constants/cons');
const UserModel = require('../models/user');
class UserDataAccess{
static async signUp({name, surname, mssidn, profileImage}){
    const user = await UserModel.create({
        name,
        surname,
        mssidn,
        profileImage,
        status: USER_STATUS.ACTIVE
    })
    return user;
}
static async findUser({ mssidn }){
    return UserModel.findOne({
            mssidn  
    })
}
static async saveToken({id, token}){
    return UserModel.findOneAndUpdate(
       {_id:id},
       { $set: { token: token }},
       {$new :true})
}
static async findUserById({userId}){
    console.log('userId',userId)
    return UserModel.findOne({
        _id: userId
    })
}
static async deleteAccount({userId}){
return UserModel.findOneAndUpdate(
       {_id:userId},
       { $set: { status: USER_STATUS.DEACTIVE }},
       {$new :true})
}
}

module.exports = UserDataAccess;