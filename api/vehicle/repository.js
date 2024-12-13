const Vehicle = require("./model");

class VehicleRepository {
  async create(vehicleData) {
    return Vehicle.create(vehicleData);
  }

  async updateById(id, updateData) {
    return Vehicle.findByIdAndUpdate(id, updateData, { new: true });
  }

  async findAll() {
    return Vehicle.find();
  }

  async findById(id) {
    return Vehicle.findById(id);
  }
}

module.exports = new VehicleRepository();
