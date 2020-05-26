const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  fullName: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: email => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "Please enter a valid email"
    },
    required: [true, "Email required"]
  },
  password: {
    type: String,
    required: true
  },

  dateCreated: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date
  }
});
User.methods.setFullName = function() {
  this.fullName = `${this.firstName} ${this.lastName}`;
  return this.fullName;
};
const User = mongoose.model("user", UserSchema);
module.exports = User;
