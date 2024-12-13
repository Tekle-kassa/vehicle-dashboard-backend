const Vehicle = require("./model");

class VehicleRepository {
  async create(vehicleData) {
    return Vehicle.create(vehicleData);
  }

  async updateById(id, updateData) {
    return Vehicle.findByIdAndUpdate(id, updateData, { new: true });
  }

  async findAll({ filters = {}, sortBy, sortOrder, offset, limit }) {
    const total = await Vehicle.countDocuments(filters);
    const vehicles = await Vehicle.find(filters)
      .sort({ [sortBy]: sortOrder })
      .skip(offset)
      .limit(limit)
      .collation({ locale: "en", strength: 2 });
    return { total, vehicles };
  }

  async findById(id) {
    return Vehicle.findById(id);
  }
  async findByname(name) {
    return Vehicle.findOne({ name });
  }
  async deleteById(id) {
    return Vehicle.findByIdAndDelete(id);
  }
}

module.exports = new VehicleRepository();
