import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

//If mongoose.models.food will be already there,it will be used.If it is not there,then it will create a new model i,e  mongoose.model("food", foodSchema)
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
