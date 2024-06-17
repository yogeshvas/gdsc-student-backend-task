const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceTypes = {
  CAB: "cab",
  AMBULANCE: "ambulance",
  COURIER: "courier",
};

const serviceStatus = {
  PLACED: "placed",
  ACCEPTED: "accepted",
  DONE: "done",
};
const serviceSchema = new Schema(
  {
    type: {
      type: String,
      enum: Object.values(serviceTypes),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(serviceStatus),
      default: serviceStatus.PLACED,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pickupLocation: {
      type: String,
      required: true,
    },
    dropLocation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
