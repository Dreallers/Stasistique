const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const builds = await tables.build.readAll();

    res.json(builds);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const build = await tables.build.read(req.params.id);
    if (build === null) {
      res.sendStatus(404);
    } else {
      res.json(build);
    }
  } catch (err) {
    next(err);
  }
};

const readDptdistant = async (req, res, next) => {
  try {
    const builds = await tables.build.readDptdistant();

    if (builds === null) {
      res.sendStatus(404);
    } else {
      res.json({
        Status: 200,
        Message: "Voici la liste des builds Dpt distant",
        Data: builds,
      });
    }
  } catch (err) {
    next(err);
  }
};

const readDptmelee = async (req, res, next) => {
  try {
    const builds = await tables.build.readDptmelee();
    if (builds === null) {
      res.sendStatus(404);
    } else {
      res.json({
        Status: 200,
        Message: "Voici la liste des builds Dpt mélée",
        Data: builds,
      });
    }
  } catch (err) {
    next(err);
  }
};

const readSupport = async (req, res, next) => {
  try {
    const builds = await tables.build.readSupport();
    if (builds === null) {
      res.sendStatus(404);
    } else {
      res.json({
        Status: 200,
        Message: "Voici la liste des builds Support",
        Data: builds,
      });
    }
  } catch (err) {
    next(err);
  }
};

const readTank = async (req, res, next) => {
  try {
    const builds = await tables.build.readTank();
    if (builds === null) {
      res.sendStatus(404);
    } else {
      res.json({
        Status: 200,
        Message: "Voici la liste des builds Tank",
        Data: builds,
      });
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  req.body.id = id;
  try {
    const result = await tables.build.update(req.body);
    if (result) {
      try {
        const buildUpdated = await tables.build.read(req.params.id);
        if (buildUpdated) {
          res.json({
            Status: 200,
            Message: "votre build a bien été modifié",
            Data: buildUpdated,
          });
        }
        res.sendStatus(404);
      } catch (err) {
        next(err);
      }
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const build = req.body;

  try {
    const insertId = await tables.build.create(build);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await tables.build.delete(id);
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
  browse,
  read,
  readDptdistant,
  readDptmelee,
  readSupport,
  readTank,
  edit,
  add,
  destroy,
};
