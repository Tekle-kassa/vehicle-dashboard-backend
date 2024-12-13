const vehicleService = require("./service");

module.exports.addVehicle = async (req, res) => {
  try {
    const existingVehicle = await vehicleService.getVehicleByName(
      req.body.name
    );
    if (existingVehicle) {
      return res.status(400).json({ message: "vehicle already exists" });
    }
    const vehicle = await vehicleService.addVehicle(req.body);
    res.status(201).json({
      status: "SUCCESS",
      message: "Successfully added vehicle ",
      data: vehicle,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.updateVehicleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const vehicle = await vehicleService.updateVehicleStatus(id, status);
    res.status(200).json({
      status: "SUCCESS",
      message: "Successfully updated status",
      data: vehicle,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.getAllVehicles = async (req, res) => {
  try {
    const { vehicles, total } = await vehicleService.getAllVehicles(req.query);
    res.status(200).json({
      status: "SUCCESS",
      message: "Successfully fetched vehicles",
      results: vehicles.length,
      data: {
        vehicles,
        total,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
module.exports.getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await vehicleService.getVehicleById(id);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.status(200).json({
      status: "SUCCESS",
      message: "Successfully fetched vehicle",
      data: vehicle,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await vehicleService.getVehicleById(id);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    await vehicleService.deleteVehicleById(id);
    res.status(204).json({
      status: "SUCCESS",
      message: "Successfully fetched vehicle",
      data: vehicle,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
