unit = require 'unit.js'
express = require 'express'
virtual = require '../index'

app = express()
app.use virtual
app.get '/test', (req, res, next) ->
  res
    .status 200
    .set 'Content-Type', req.headers.accept
    .set 'X-Request-URL', req.url
    .send()

describe '#virtual', ->
  it 'should be a function', ->
    unit
      .function virtual

    return null

  it 'should do nothing when url has no ext', (done) ->
    unit
      .httpAgent app
      .get '/test'
      .set 'Accept', 'text/html'
      .expect 200
      .expect 'Content-Type', /^text\/html/i
      .expect 'X-Request-URL', '/test'
      .end done

    return null

  it 'should replace js ext in url with appropriate accept header', (done) ->
    unit
      .httpAgent app
      .get '/test.js'
      .expect 200
      .expect 'Content-Type', /^application\/javascript/i
      .expect 'X-Request-URL', '/test'
      .end done

    return null

  it 'should replace json ext in url with appropriate accept header', (done) ->
    unit
      .httpAgent app
      .get '/test.json'
      .expect 200
      .expect 'Content-Type', /^application\/json/i
      .expect 'X-Request-URL', '/test'
      .end done

    return null

  it 'should replace xml ext in url with appropriate accept header', (done) ->
    unit
      .httpAgent app
      .get '/test.xml'
      .expect 200
      .expect 'Content-Type', /^application\/xml/i
      .expect 'X-Request-URL', '/test'
      .end done

    return null

  it 'should replace html ext in url with appropriate accept header', (done) ->
    unit
      .httpAgent app
      .get '/test.html'
      .expect 200
      .expect 'Content-Type', /^text\/html/i
      .expect 'X-Request-URL', '/test'
      .end done

    return null

  it 'should replace txt ext in url with appropriate accept header', (done) ->
    unit
      .httpAgent app
      .get '/test.txt'
      .expect 200
      .expect 'Content-Type', /^text\/plain/i
      .expect 'X-Request-URL', '/test'
      .end done

    return null

  it 'should replace jpg ext in url with appropriate accept header', (done) ->
    unit
      .httpAgent app
      .get '/test.jpg'
      .expect 200
      .expect 'Content-Type', /^image\/jpeg/i
      .expect 'X-Request-URL', '/test'
      .end done

    return null

  it 'should replace ext in url and retain query parameters', (done) ->
    unit
      .httpAgent app
      .get '/test.json?q=hi&test=1'
      .expect 200
      .expect 'Content-Type', /^application\/json/i
      .expect 'X-Request-URL', '/test?q=hi&test=1'
      .end done

    return null
