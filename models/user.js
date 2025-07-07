const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
name :{ type:String, required:false },
surname :{ type: String },
profileImage:{ type :String },
mssidn:{ type: String },
token:{ type:String },
status :{type :Number }
},
{ timestamps: {
        createdAt: 'createdAt',
        updatedAt :'updatedAt',
    }
     
}
);
const User = mongoose.model('User',UserSchema,'users')
module.exports = User;