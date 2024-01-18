const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const buildControllers = require("./controllers/buildControllers");
const itemControllers = require("./controllers/itemControllers");
const authControllers = require("./controllers/authControllers");
const verifyToken = require("./services/auth");

// Routes GET

router.get("/builds", buildControllers.browse);
router.get("/items", itemControllers.browse);

// Routes GET BY CATEGORIE

router.get("/items/casques", itemControllers.readCasques);
router.get("/items/amulettes", itemControllers.readAmulettes);
router.get("/items/plastrons", itemControllers.readPlastrons);
router.get("/items/bottes", itemControllers.readBottes);
router.get("/items/capes", itemControllers.readCapes);
router.get("/items/epaulieres", itemControllers.readEpaulieres);
router.get("/items/ceintures", itemControllers.readCeintures);
router.get("/items/montures", itemControllers.readMontures);
router.get("/items/armes", itemControllers.readArmes);
router.get("/items/emblemes", itemControllers.readEmblemes);
router.get("/items/familiers", itemControllers.readFamiliers);

// Routes GET BY TYPE
router.get("/builds/dptdistant", buildControllers.readDptdistant);
router.get("/builds/dptmelee", buildControllers.readDptmelee);
router.get("/builds/support", buildControllers.readSupport);
router.get("/builds/tank", buildControllers.readTank);

// Routes GET BY ID
router.get("/user/:id", userControllers.read);
router.get("/build/:id", buildControllers.read);
router.get("/item/:id", itemControllers.read);


// Routes Authenticator

router.post("/login", authControllers.login);

// Routes POST
router.post("/user", userControllers.add);



router.use(verifyToken);
router.post("/build", buildControllers.add);
router.post("/item", itemControllers.add);

//  Routes PUT

router.put("/build/:id", buildControllers.edit);
router.put("/item/:id", itemControllers.edit);
router.put("user/:id", userControllers.edit);

// Routes DELETE

router.delete("/build/:id", buildControllers.destroy);
router.delete("/item/:id", itemControllers.destroy);
router.delete("user/:id", userControllers.destroy);
module.exports = router;
