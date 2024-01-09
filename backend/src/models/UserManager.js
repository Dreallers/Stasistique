const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }



  async create({pseudo, mail, password, access_lvl}){
const [result] = await this.database.query(
    `INSERT INTO ${this.table} (pseudo, mail, password, access_lvl) VALUES (?,?,?,?)`,
    [pseudo, mail, password, access_lvl]
    );
    return result.insertID;
  }


}
module.exports = UserManager;