var express = require('express');
var router = express.Router();
// const fetch = require("node-fetch");
// const Date = require("../models/schema");

/* GET home page. */
router.get('/date', function(req, res, next) {
  const dates = new Date();
  const year = dates.getFullYear();
  res.json({year});
});

module.exports = router;
