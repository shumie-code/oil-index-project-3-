const db = require("../models");

// Defining methods for the oilController to access and interact via
// CRUD with the corresponding json data
// from the mongodb
module.exports = {
    findAll: function(req, res) {
        db.Oil.find(req.query)
        .then(dbOil => res.json(dbOil))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Oil.findById(req.body)
        .then(dbOil => res.json(dbOil))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Oil.create(req.body)
        .then(dbOil => res.json(dbOil))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Oil.update(req.body)
        .then(dbOil => res.json(dbOil))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Oil.remove(req.body)
        .then(dbOil => res.json(dbOil))
        .catch(err => res.status(422).json(err));
    }
};
