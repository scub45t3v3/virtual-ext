(function() {
  var app, express, unit, virtual;

  unit = require('unit.js');

  express = require('express');

  virtual = require('../index');

  app = express();

  app.use(virtual);

  app.get('/test', function(req, res, next) {
    return res.status(200).set('Content-Type', req.headers.accept).send();
  });

  describe('#virtual', function() {
    it('should be a function', function() {
      unit["function"](virtual);
      return null;
    });
    it('should replace js ext in url with appropriate accept header', function(done) {
      unit.httpAgent(app).get('/test.js').expect(200).expect('Content-Type', 'application/javascript').end(done);
      return null;
    });
    it('should replace json ext in url with appropriate accept header', function(done) {
      unit.httpAgent(app).get('/test.json').expect(200).expect('Content-Type', 'application/json').end(done);
      return null;
    });
    it('should replace xml ext in url with appropriate accept header', function(done) {
      unit.httpAgent(app).get('/test.xml').expect(200).expect('Content-Type', 'application/xml').end(done);
      return null;
    });
    it('should replace html ext in url with appropriate accept header', function(done) {
      unit.httpAgent(app).get('/test.html').expect(200).expect('Content-Type', /html/).end(done);
      return null;
    });
    it('should replace txt ext in url with appropriate accept header', function(done) {
      unit.httpAgent(app).get('/test.txt').expect(200).expect('Content-Type', /plain/).end(done);
      return null;
    });
    return it('should replace jpg ext in url with appropriate accept header', function(done) {
      unit.httpAgent(app).get('/test.jpg').expect(200).expect('Content-Type', 'image/jpeg').end(done);
      return null;
    });
  });

}).call(this);
