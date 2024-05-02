import { Schema, model, models, Document } from "mongoose";

export interface ITransactionSchema extends Document {
  createdAt: Date;
  stripeId: string;
  amount: number;
  plan?: string; // Optional property
  credits?: number; // Optional property
  buyer?: string; // Optional property, assuming it's referencing a User ID
}

const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Transaction =
  models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
