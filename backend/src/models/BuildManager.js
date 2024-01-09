const AbstractManager = require("./AbstractManager");

class BuildManager extends AbstractManager {
    constructor() {
        super({table: "build"});
    }
async create({
    nom, lvl, icone, categorie, dmg1, dmg2, stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9
}) {
    const [result] = await this.database.query(`INSERT INTO ${this.table} (nom, lvl, icone, categorie, dmg1, dmg2, stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [nom, lvl, icone, categorie, dmg1, dmg2, stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9]
    );
    return result.insertId;
}

}
module.exports = BuildManager;