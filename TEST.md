# TOC
   - [#virtual](#virtual)
<a name=""></a>
 
<a name="virtual"></a>
# #virtual
should be a function.

```js
unit["function"](virtual);
return null;
```

should replace js ext in url with appropriate accept header.

```js
unit.httpAgent(app).get('/test.js').expect(200).expect('Content-Type', 'application/javascript').end(done);
return null;
```

should replace json ext in url with appropriate accept header.

```js
unit.httpAgent(app).get('/test.json').expect(200).expect('Content-Type', 'application/json').end(done);
return null;
```

should replace xml ext in url with appropriate accept header.

```js
unit.httpAgent(app).get('/test.xml').expect(200).expect('Content-Type', 'application/xml').end(done);
return null;
```

should replace html ext in url with appropriate accept header.

```js
unit.httpAgent(app).get('/test.html').expect(200).expect('Content-Type', /html/).end(done);
return null;
```

should replace txt ext in url with appropriate accept header.

```js
unit.httpAgent(app).get('/test.txt').expect(200).expect('Content-Type', /plain/).end(done);
return null;
```

should replace jpg ext in url with appropriate accept header.

```js
unit.httpAgent(app).get('/test.jpg').expect(200).expect('Content-Type', 'image/jpeg').end(done);
return null;
```

