const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    res.json(users);
  } catch (err) {
    
    next(err);
  }
};
module.exports = {
    browse,
    // read,
    // edit,
    // add,
    // destroy,
  };