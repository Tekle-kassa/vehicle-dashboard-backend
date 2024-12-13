const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    name: { type: String, required: true },
    status: {
      type: String,
      enum: ["active", "inactive", "maintenance"],
      default: "inactive",
    },
  },
  { timestamps: true }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
