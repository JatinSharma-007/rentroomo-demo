import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  airConditioner:{
    type: Boolean,
    default: false,
  }, 
  wifi:{
    type: Boolean,
    default: false,
  }, 
  geaser:{
    type: Boolean,
    default: false,
  },
  parking:{
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", HotelSchema)