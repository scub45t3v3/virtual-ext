'use strict';

(() => {
  // include dependencies
  const path = require('path');
  const mime = require('mime');
  const debug = require('debug')('virtual-ext');

  const virtual = (req, res, next) => {
    debug('Executing virtual-ext middleware');
    const accept = mime.getType(req.path);
    const ext = path.extname(req.path);
    const regex = new RegExp(`${ext}(\\?.+|)$`);
    const url = req.url.replace(regex, '$1');

    if (accept && url !== req.url) {
      debug('Update Accept header from %s to %s', req.headers.accept, accept);
      req.headers.accept = accept;

      debug('Update URL from %s to %s', req.url, url);
      req.url = url;
    }

    debug('Exiting virtual-ext middleware');

    return next();
  }; // end virtual

  // export middleware as commonjs module
  module.exports = virtual;
})(); // end IIFE