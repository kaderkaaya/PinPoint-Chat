const jwt = require('jsonwebtoken');

const UserModel = require('../models/user');
class UserDataAccess{
static async signUp({name, surname, mssidn, profileImage, mail}){
    const user = await UserModel.create({
        name,
        surname,
        mssidn,
        profileImage,
        mail,
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
}
module.exports = UserDataAccess;