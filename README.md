# Virtual Ext
[![Build Status](https://travis-ci.org/scub45t3v3/virtual-ext.svg?branch=master)](https://travis-ci.org/scub45t3v3/acceptable)

## Purpose
Allow file extension in uri to replace Accept header

## Installation
Via [npm](https://www.npmjs.com/)

```
npm install virtual-ext
```

## Usage
*Coffeescript*

```coffeescript
express = require 'express'
virtual = require 'virtual-ext'

app = express()
app.use virtual
```

*Javascript*

```javascript
var express = require('express');
var virtual = require('virtual-ext');

var app = express();

app.use(virtual);
```

## Test
```
npm install
npm test
```
