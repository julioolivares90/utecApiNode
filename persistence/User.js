var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name : {type:String,required:true,max:150},
    age: {type:String,required:true}
})

module.exports = mongoose.model('users',userSchema)