const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB connected"))
//   .catch(() => console.log("MongoDB connection failed"));

const orderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  country: String,
  phone: Number,
  paymentMethod: String,
  products: [
    {
      name: String,
      price: Number,
      quantity: Number,
      size: String,
      image: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("order", orderSchema);
