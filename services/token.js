const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const secret =process.env.JWT_SECRET;

// console.log('JWT_SECRET:', secret);
// if(!secret){
//   console.log('secret Error')
// }
class TokenService{
  static async generateToken({id}){
      const token =  jwt.sign({ id },secret , {
    expiresIn: "30d",
  });
  return token;
  }
}
module.exports = TokenService; 