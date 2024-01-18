const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
    constructor() {
        super({table: "item"});
    }
async create({nom, lvl, categorie}) {
    const [result] = await this.database.query(`INSERT INTO ${this.table} (nom, lvl, icone, categorie, dmg1, dmg2, stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [nom, lvl, icone, categorie, dmg1, dmg2, stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9]
    );
    return result.insertId;
}

async readAll() {
    const [result] = await this.database.query(`SELECT * FROM ${this.table}`);
return result;
}

async read(id) {
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`
    , [id]);
    return result;
}

async readCasques(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Casque'`);
    return result;
}

async readAmulettes(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Amulette'`);
    return result;
}

async readPlastrons(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Plastron'`);
    return result;
}

async readBottes(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Bottes'`);
    return result;
}

async readCapes(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Cape'`);
    return result;
}

async readEpaulieres(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Epaulières'`);
    return result;
}

async readCeintures(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Ceinture'`);
    return result;
}

async readMontures(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Monture'`);
    return result;
}

async readArmes(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Arme 1M / 2M'`);
    return result;
}

async readEmblemes(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Emblème'`);
    return result;
}

async readFamiliers(){
    const [result] = await this.database.query(`SELECT * FROM ${this.table} WHERE categorie = 'Familier'`);
    return result;
}

async update(req) {
    const [result] = await this.database.query(`UPDATE ${this.table} SET nom = ?, lvl = ?, icone = ?, categorie = ?, dmg1 = ?, dmg2 = ?, stat1 = ?, stat2 = ?, stat3 = ?, stat4 = ?, stat5 = ?, stat6 = ?, stat7 = ?, stat8 = ?, stat9 = ? WHERE id = ?`,
     [req.nom, req.lvl, req.icone, req.categorie, req.dmg1, req.dmg2, req.stat1, req.stat2, req.stat3, req.stat4, req.stat5, req.stat6, req.stat7, req.stat8, req.stat9, req.id]
     );
     return result;
}
async delete(id) {
    const [result] = await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`,[id]
    );
    return result;
}

}

module.exports = ItemManager;