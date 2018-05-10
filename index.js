(function() {
  var debug, mime, path, virtual;

  path = require('path');

  mime = require('mime');

  debug = require('debug')('virtual-ext');

  virtual = function(req, res, next) {
    var accept, ext, regex, url;
    debug('Executing virtual-ext middleware');
    accept = mime.getType(req.path);
    ext = path.extname(req.path);
    regex = new RegExp(`${ext}(\\?.+|)$`);
    url = req.url.replace(regex, '$1');
    if (accept && url !== req.url) {
      debug('Update Accept header from %s to %s', req.headers.accept, accept);
      req.headers.accept = accept;
      debug('Update URL from %s to %s', req.url, url);
      req.url = url;
    }
    debug('Exiting virtual-ext middleware');
    return next();
  };

  module.exports = virtual;

}).call(this);
