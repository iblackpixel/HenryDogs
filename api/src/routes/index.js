const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const allDogs = require("./dogs.js");
//const allRazas = require("./razas.js");
const allTemperamentos = require("./temperament.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use("/razas", allRazas);
//router.use("/dogs?name=", allDogs);
router.use("/dogs", allDogs);
router.use("/temperament", allTemperamentos);

module.exports = router;
