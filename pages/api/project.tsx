import mongoose from "mongoose";
var Schema = mongoose.Schema;

var project = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var User = mongoose.model("Project", project);

export default User;
