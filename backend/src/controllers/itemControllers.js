const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const items = await tables.item.readAll();

    res.json(items);
  } catch (err) {
    next(err);
  }
};

const readCasques = async (req, res, next) => {
  try {
    const casques = await tables.item.readCasques();
    res.json({
      Status: 200,
      Message: "Voici la liste des casques",
      Data: casques,
    });
  } catch (err) {
    next(err);
  }
};

const readAmulettes = async (req, res, next) => {
  try {
    const Amulettes = await tables.item.readAmulettes();
    res.json({
      Status: 200,
      Message: "Voici la liste des Amulettes",
      Data: Amulettes,
    });
  } catch (err) {
    next(err);
  }
};

const readPlastrons = async (req, res, next) => {
  try {
    const Plastrons = await tables.item.readPlastrons();
    res.json({
      Status: 200,
      Message: "Voici la liste des Plastrons",
      Data: Plastrons,
    });
  } catch (err) {
    next(err);
  }
};

const readBottes = async (req, res, next) => {
  try {
    const Bottes = await tables.item.readBottes();
    res.json({
      Status: 200,
      Message: "Voici la liste des Bottes",
      Data: Bottes,
    });
  } catch (err) {
    next(err);
  }
};

const readCapes = async (req, res, next) => {
  try {
    const capes = await tables.item.readCapes();
    res.json({
      Status: 200,
      Message: "Voici la liste des capes",
      Data: capes,
    });
  } catch (err) {
    next(err);
  }
};

const readEpaulieres = async (req, res, next) => {
  try {
    const Epaulieres = await tables.item.readEpaulieres();
    res.json({
      Status: 200,
      Message: "Voici la liste des Epaulieres",
      Data: Epaulieres,
    });
  } catch (err) {
    next(err);
  }
};

const readCeintures = async (req, res, next) => {
  try {
    const Ceintures = await tables.item.readCeintures();
    res.json({
      Status: 200,
      Message: "Voici la liste des Ceintures",
      Data: Ceintures,
    });
  } catch (err) {
    next(err);
  }
};

const readMontures = async (req, res, next) => {
  try {
    const Montures = await tables.item.readMontures();
    res.json({
      Status: 200,
      Message: "Voici la liste des Montures",
      Data: Montures,
    });
  } catch (err) {
    next(err);
  }
};

const readArmes = async (req, res, next) => {
  try {
    const Armes = await tables.item.readArmes();
    res.json({
      Status: 200,
      Message: "Voici la liste des Armes",
      Data: Armes,
    });
  } catch (err) {
    next(err);
  }
};

const readEmblemes = async (req, res, next) => {
  try {
    const Emblemes = await tables.item.readEmblemes();
    res.json({
      Status: 200,
      Message: "Voici la liste des Emblemes",
      Data: Emblemes,
    });
  } catch (err) {
    next(err);
  }
};

const readFamiliers = async (req, res, next) => {
  try {
    const Familiers = await tables.item.readFamiliers();
    res.json({
      Status: 200,
      Message: "Voici la liste des familiers",
      Data: Familiers,
    });
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const item = await tables.item.read(req.params.id);
    if (item === null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  req.body.id = id;
  if (req.auth.access_lvl === 1) {
    try {
      const result = await tables.item.update(req.body);
      if (result) {
        try {
          const itemUpdated = await tables.item.read(req.params.id);
          if (itemUpdated) {
            res.json({
              Status: 200,
              Message: "Item correctement modifié.",
              Data: itemUpdated,
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
  } else {
    next("Access denied");
  }
};

const add = async (req, res, next) => {
  const item = req.body;
  if (req.auth.access_lvl === 1) {
    try {
      const insertId = await tables.item.create(item);
      res.status(201).json({ insertId });
    } catch (err) {
      next(err);
    }
  } else {
    next("Access denied");
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  if (req.auth.access_lvl === 1) {
    try {
      const result = await tables.item.delete(id);
      if (result.affectedRows) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      next(err);
    }
  } else {
    next("Access denied");
  }
};

module.exports = {
  browse,
  readCasques,
  readAmulettes,
  readPlastrons,
  readBottes,
  readCapes,
  readEpaulieres,
  readCeintures,
  readMontures,
  readArmes,
  readEmblemes,
  readFamiliers,
  read,
  edit,
  add,
  destroy,
};
