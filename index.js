(function() {
  var mime, path, virtual;

  path = require('path');

  mime = require('mime');

  virtual = function(req, res, next) {
    var accept, ext, regex, url;
    accept = mime.getType(req.path);
    ext = path.extname(req.path);
    regex = new RegExp(`${ext}(\\?.+|)$`);
    url = req.url.replace(regex, '$1');
    if (accept && url !== req.url) {
      req.headers.accept = accept;
      req.url = url;
    }
    return next();
  };

  module.exports = virtual;

}).call(this);
