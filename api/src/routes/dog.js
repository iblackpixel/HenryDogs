const server = require("express").Router();
const axios = require("axios");
const { Model } = require("sequelize");
const { request, response } = require("express");
const { Raza, Temperament } = require("../db.js");
let serie = 0;

server.post("/", async (req, res, next) => {
  try {
    const { name, height, weight, lifespan, temperaments } = req.body;
    // const result = await Raza.findOrCreate({
    //   where: { name: name },
    //   defaults: {
    //     id: "b" + serie++,
    //     height: height,
    //     weight: weight,
    //     lifespan: lifespan,
    //     temperaments: temperaments,
    //   },
    // });
    const perri = await Raza.findAll({
      include: [{ model: Temperament }],
    });
    serie = perri.length;
    const result = await Raza.create({
      name: name,
      id: "b" + serie,
      height: { metric: height },
      weight: { metric: weight },
      life_span: lifespan,
      temperament: temperaments.join(","),
      image: { url: "../../../dog.png" },
    });
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = server;
