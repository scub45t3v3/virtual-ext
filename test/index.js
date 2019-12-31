'use strict';

// include dependencies
const unit = require('unit.js');
const express = require('express');
const virtual = require('../index');
const app = express();

app.use(virtual);

app.get('/test', (req, res, next) => {
  res
    .status(200)
    .set('Content-Type', req.headers.accept)
    .set('X-Request-URL', req.url)
    .send();
}); // end app.get

// describe #virtual
describe('#virtual', () => {
  it('should be a function', () => {
    unit
      .function(virtual);
  }); // end it

  it('should do nothing when url has no ext', (done) => {
    unit
      .httpAgent(app)
      .get('/test')
      .set('Accept', 'text/html')
      .expect(200)
      .expect('Content-Type', /^text\/html/iu)
      .expect('X-Request-URL', '/test')
      .end(done);
  }); // end it

  it('should replace js ext in url with appropriate accept header', (done) => {
    unit
      .httpAgent(app)
      .get('/test.js')
      .expect(200)
      .expect('Content-Type', /^application\/javascript/iu)
      .expect('X-Request-URL', '/test')
      .end(done);
  }); // end it

  it('should replace json ext in url with appropriate accept header', (done) => {
    unit
      .httpAgent(app)
      .get('/test.json')
      .expect(200)
      .expect('Content-Type', /^application\/json/iu)
      .expect('X-Request-URL', '/test')
      .end(done);
  }); // end it

  it('should replace xml ext in url with appropriate accept header', (done) => {
    unit
      .httpAgent(app)
      .get('/test.xml')
      .expect(200)
      .expect('Content-Type', /^application\/xml/iu)
      .expect('X-Request-URL', '/test')
      .end(done);
  }); // end it

  it('should replace html ext in url with appropriate accept header', (done) => {
    unit
      .httpAgent(app)
      .get('/test.html')
      .expect(200)
      .expect('Content-Type', /^text\/html/iu)
      .expect('X-Request-URL', '/test')
      .end(done);
  }); // end it

  it('should replace txt ext in url with appropriate accept header', (done) => {
    unit
      .httpAgent(app)
      .get('/test.txt')
      .expect(200)
      .expect('Content-Type', /^text\/plain/iu)
      .expect('X-Request-URL', '/test')
      .end(done);
  }); // end it

  it('should replace jpg ext in url with appropriate accept header', (done) => {
    unit
      .httpAgent(app)
      .get('/test.jpg')
      .expect(200)
      .expect('Content-Type', /^image\/jpeg/iu)
      .expect('X-Request-URL', '/test')
      .end(done);
  }); // end it

  it('should replace ext in url and retain query parameters', (done) => {
    unit
      .httpAgent(app)
      .get('/test.json?q=hi&test=1')
      .expect(200)
      .expect('Content-Type', /^application\/json/iu)
      .expect('X-Request-URL', '/test?q=hi&test=1')
      .end(done);
  }); // end it
}); // end describe #virtual