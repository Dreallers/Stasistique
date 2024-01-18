const AbstractManager = require("./AbstractManager");


class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async create( pseudo, mail, password ) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (pseudo, mail, password) VALUES (?,?,?)`,
      [pseudo, mail, password]
    );
    return result;
  }

  async read(id) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }

  async readPseudo(pseudo) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE pseudo = ?`,
      [pseudo]);
      return result;
  }


  async update(req) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET pseudo = ?, mail = ?, password = ? WHERE id = ?`,
      [req.pseudo, req.mail, req.password, req.id]
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
module.exports = UserManager;
