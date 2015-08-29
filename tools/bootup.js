var app = require('../server/server.js');
console.log(1);
var dataSource = app.dataSources.ta;
console.log(2);


var model = app.models.app;
dataSource.createModel(model.name, model.properties, model);
  
dataSource.automigrate(function () {
  dataSource.discoverModelProperties(model.name, function (err, props) {
    console.log(props);
  });
});
