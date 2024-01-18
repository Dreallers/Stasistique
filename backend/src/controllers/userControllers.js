const tables = require("../tables");
const argon2 = require("argon2");

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    if (user === null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  req.body.id = id;
  try {
    const result = await tables.user.update(req.body);
    if (result) {
      res.json(result);
      res.status(204);
    } else {
      return res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const hash = await argon2.hash(req.body.password);
  const { pseudo, mail } = req.body;
  try {
    const userAdd = await tables.user.create(pseudo, mail, hash);
    res.json({ Status: 201, Message: "Enregistrement réussi"});
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await tables.user.delete(id);
    if (result.affectedRows) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  read,
  edit,
  add,
  destroy,
};
