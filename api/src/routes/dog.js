const server = require("express").Router();
const axios = require("axios");
const { Model } = require("sequelize");
const { request, response } = require("express");
const { Raza } = require("../db.js");
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
    const result = await Raza.create({
      name: name,
      id: "b" + serie++,
      height: height,
      weight: weight,
      lifespan: lifespan,
      temperaments: temperaments,
    });
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = server;
