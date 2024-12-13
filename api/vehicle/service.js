const vehicleRepository = require("./repository");

class VehicleService {
  async addVehicle(vehicleData) {
    return vehicleRepository.create(vehicleData);
  }

  async updateVehicleStatus(id, status) {
    const vehicle = await vehicleRepository.findById(id);
    if (!vehicle) throw new Error("Vehicle not found");
    return vehicleRepository.updateById(id, {
      status,
      lastUpdated: Date.now(),
    });
  }

  async getAllVehicles() {
    return vehicleRepository.findAll();
  }
}

module.exports = new VehicleService();
