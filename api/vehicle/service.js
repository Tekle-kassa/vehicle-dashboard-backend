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

  async getAllVehicles(query = {}) {
    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;
    const sortBy = query.sortBy || "updatedAt";
    const order = query.order || "desc";
    const sortOrder = order === "asc" ? 1 : -1;
    const offset = (page - 1) * limit;
    const filters = { ...query };
    delete filters.limit;
    delete filters.page;
    delete filters.sortBy;
    delete filters.order;
    const { vehicles, total } = await vehicleRepository.findAll({
      filters,
      sortBy,
      sortOrder,
      offset,
      limit,
    });
    return {
      vehicles,
      total,
    };
  }
  async getVehicleByName(name) {
    const vehicle = await vehicleRepository.findByname(name);
    return vehicle;
  }
  async getVehicleById(id) {
    const vehicle = await vehicleRepository.findById(id);
    return vehicle;
  }
  async deleteVehicleById(id) {
    return vehicleRepository.deleteById(id);
  }
}

module.exports = new VehicleService();
