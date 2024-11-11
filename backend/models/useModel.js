import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    //by default, cart will be empty.
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
);

//If the model is already created, then it will be used .If the model is not created then, mongoose.model("user", userSchema) will create the model.
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
