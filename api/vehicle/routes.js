const express = require("express");
const vehicleController = require("./controller");
const validator = require("../../middlewares/validator");
const { addVehicleSchema, updateVehicleStatusSchema } = require("./validation");
const router = express.Router();

router.post(
  "/vehicles",
  validator(addVehicleSchema),
  vehicleController.addVehicle
);
router.put(
  "/vehicles/:id",
  validator(updateVehicleStatusSchema),
  vehicleController.updateVehicleStatus
);
router.get("/vehicles", vehicleController.getAllVehicles);
router.get("/vehicles/:id", vehicleController.getVehicleById);
router.delete("/vehicles/:id", vehicleController.deleteVehicle);

module.exports = router;
