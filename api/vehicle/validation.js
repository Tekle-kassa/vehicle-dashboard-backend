const Joi = require("joi");

const addVehicleSchema = Joi.object({
  name: Joi.string().required().min(2).max(50),
  status: Joi.string()
    .valid("active", "inactive", "maintenance")
    .default("inactive"),
});

const updateVehicleStatusSchema = Joi.object({
  status: Joi.string().valid("active", "inactive", "maintenance").required(),
});

module.exports = {
  addVehicleSchema,
  updateVehicleStatusSchema,
};
