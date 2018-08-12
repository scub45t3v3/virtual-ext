# TOC
   - [#virtual](#virtual)
<a name=""></a>
 
<a name="virtual"></a>
# #virtual
should be a function.

```js
unit
  .function(virtual);
```

should do nothing when url has no ext.

```js
unit
  .httpAgent(app)
  .get('/test')
  .set('Accept', 'text/html')
  .expect(200)
  .expect('Content-Type', /^text\/html/i)
  .expect('X-Request-URL', '/test')
  .end(done);
```

should replace js ext in url with appropriate accept header.

```js
unit
  .httpAgent(app)
  .get('/test.js')
  .expect(200)
  .expect('Content-Type', /^application\/javascript/i)
  .expect('X-Request-URL', '/test')
  .end(done);
```

should replace json ext in url with appropriate accept header.

```js
unit
  .httpAgent(app)
  .get('/test.json')
  .expect(200)
  .expect('Content-Type', /^application\/json/i)
  .expect('X-Request-URL', '/test')
  .end(done);
```

should replace xml ext in url with appropriate accept header.

```js
unit
  .httpAgent(app)
  .get('/test.xml')
  .expect(200)
  .expect('Content-Type', /^application\/xml/i)
  .expect('X-Request-URL', '/test')
  .end(done);
```

should replace html ext in url with appropriate accept header.

```js
unit
  .httpAgent(app)
  .get('/test.html')
  .expect(200)
  .expect('Content-Type', /^text\/html/i)
  .expect('X-Request-URL', '/test')
  .end(done);
```

should replace txt ext in url with appropriate accept header.

```js
unit
  .httpAgent(app)
  .get('/test.txt')
  .expect(200)
  .expect('Content-Type', /^text\/plain/i)
  .expect('X-Request-URL', '/test')
  .end(done);
```

should replace jpg ext in url with appropriate accept header.

```js
unit
  .httpAgent(app)
  .get('/test.jpg')
  .expect(200)
  .expect('Content-Type', /^image\/jpeg/i)
  .expect('X-Request-URL', '/test')
  .end(done);
```

should replace ext in url and retain query parameters.

```js
unit
  .httpAgent(app)
  .get('/test.json?q=hi&test=1')
  .expect(200)
  .expect('Content-Type', /^application\/json/i)
  .expect('X-Request-URL', '/test?q=hi&test=1')
  .end(done);
```

