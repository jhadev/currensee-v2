  
import mongoose from 'mongoose';
const {Schema} = mongoose

const Transaction = new Schema({
  description: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  income: {
    type: Boolean,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

export default Transaction