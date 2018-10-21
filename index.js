'use strict';

(() => {
  // include dependencies
  const path = require('path');
  const mime = require('mime');
  const debug = require('debug')('@scuba-squad:virtual-ext');

  const virtual = (req, res, next) => {
    debug('call:virtual(req, res, next)');
    const accept = mime.getType(req.path);
    const ext = path.extname(req.path);
    const regex = new RegExp(`${ext}(\\?.+|)$`);
    const url = req.url.replace(regex, '$1');

    if (accept && url !== req.url) {
      debug('before:set:req.headers.accept = %s', req.headers.accept);
      req.headers.accept = accept;
      debug('set:req.headers.accept = %s', req.headers.accept);

      debug('before:set:req.url = %s', req.url);
      req.url = url;
      debug('set:req.url = %s', req.url);
    }

    return next();
  }; // end virtual

  // export middleware as commonjs module
  module.exports = virtual;
})(); // end IIFE