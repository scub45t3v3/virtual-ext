# Virtual Ext
[![Build Status](https://github.com/scub45t3v3/virtual-ext/workflows/CI/badge.svg?event=push)](https://github.com/scub45t3v3/virtual-ext/actions)
[![Coverage Status](https://coveralls.io/repos/github/scub45t3v3/virtual-ext/badge.svg)](https://coveralls.io/github/scub45t3v3/virtual-ext)

## Purpose
Transform a file extension in a url path into an Accept header

```bash
### ORIGINAL REQUEST ###
HTTP/2.0 GET /v1/accounts.json

Accept: */*

### TRANSFORMED REQUEST ###
HTTP/2.0 GET /v1/accounts

Accept: application/json
```

## Installation
Via [npm](https://www.npmjs.com/)

```bash
npm install @scuba-squad/virtual-ext
```

## Usage

```javascript
const express = require('express');
const virtual = require('@scuba-squad/virtual-ext');

const app = express();

app.use(virtual);
```

## Test
[tests](TEST.md)

```bash
npm install
npm test
```