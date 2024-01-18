const AbstractManager = require("./AbstractManager");

class BuildManager extends AbstractManager {
  constructor() {
    super({ table: "build" });
  }
  async create({ nom, lvl, type, user, item }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nom, lvl, type, user, item) VALUES (?,?,?,?,?)`,
      [nom, lvl, type, user, item]
    );
    return result.insertId;
  }

  async readAll() {
    const [result] = await this.database.query(`SELECT * FROM ${this.table}`);
    return result;
  }

  async read(id) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
  async readDptdistant() {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE type = "Dpt distant"`
    );
    return result;
  }

  async readDptmelee() {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE type = "Dpt mélée"`
    );
    return result;
  }

  async readSupport() {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE type = "Support"`
    );
    return result;
  }

  async readTank() {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE type = "Tank"`
    );
    return result;
  }

  async update(req) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET nom = ?, lvl = ?, type = ?, item = ? WHERE id = ?`,
      [req.nom, req.lvl, req.type, req.item, req.id]
    );
    return result;
  }
  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
}
module.exports = BuildManager;
