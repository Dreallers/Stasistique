const tables = require("../tables");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readPseudo(req.body.pseudo);
    if (user) {
      try {
        if (await argon2.verify(user[0].password, req.body.password)) {
          delete user[0].password;
          const token = await jwt.sign(
            { sub: user[0].id, access_lvl: user[0].access_lvl },
            process.env.APP_SECRET
          );

          res.json({ token, user });
        } else {
          ("password incorrect");
        }
      } catch (err) {
        next(err);
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
