const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');




const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    created: {
      type: Date,
      default: Date.now,
    },
    polls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Poll' }],
  });


  //incrypt the password before it gets saved into database
  userSchema.pre('save',async function(next){
    try {
        if(!this.isModified('password')){
            return next();
        };

        const hashed = await bcrypt.hash(this.password,10);
        this.password=hashed;
        return next();
    } catch (error) {
        return next(error);
    }
  })

  //copmare attempted pwd to password has been stored
  userSchema.methods.comparePassword = async function(attempt, next) {
    try {
      return await bcrypt.compare(attempt, this.password);
    } catch (err) {
      return next(err);
    }
  };




  module.exports = mongoose.model("User",userSchema);