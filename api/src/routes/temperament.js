const server = require("express").Router();
const axios = require("axios");
const { request, response, Router } = require("express");
const { Raza, Temperament } = require("../db.js");
const { YOUR_API_KEY } = process.env;
server.get("/", async (req, res, next) => {
  try {
    let all = [];
    const list = await axios
      .get("https://api.thedogapi.com/v1/breeds?api_key={YOUR_API_KEY}")
      .then((e) => {
        all = e.data;
      });
    let catalog = [];
    all.forEach((element) => {
      if (element["temperament"]) {
        let aux = {
          temperament: element["temperament"].split(", "),
          id: element.id,
        };
        catalog.push(aux);
      }
    });
    return res.json(catalog);
  } catch (error) {
    next(error);
  }
});

module.exports = server;
