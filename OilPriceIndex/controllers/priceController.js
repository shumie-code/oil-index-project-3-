const axios = require("axios");
const db = require("../models");

// Price controller will search the oilPrices api and return data that has yet to be saved
// It also will certify that prices returning from the api calls have the required Data

module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("API FOR LATEST PRICES HERE", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.Data.price &&
            result.Data.formatted &&
            result.Data.currency &&
            result.Data.type &&
            result.Data.created_at
        )
      )
      .then(apiOil =>
        db.Oil.find().then(dbOil =>
          apiOil.filter(apiOil =>
            dbOil.every(dbOil => dbOil.pricesId.toString() !== apiOil.id)
          )
        )
      )
      .then(oil => res.json(oil))
      .catch(err => res.status(422).json(err));
  }
};
