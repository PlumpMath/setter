module.exports = function(app) {
  var express = require('express');
  var floorplansRouter = express.Router();
  floorplansRouter.get('/', function(req, res) {
    res.send({"floorplans":[{id: 1, walls: []}]});
  });
  app.use('/api/floorplans', floorplansRouter);
};
