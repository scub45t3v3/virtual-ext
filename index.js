(function() {
  var exports, mime, path, virtual;

  path = require('path');

  mime = require('mime');

  virtual = function(req, res, next) {
    var ext, regex;
    ext = path.extname(req.path);
    regex = new RegExp(ext + "(\\?.+|)$");
    if (/[a-z]/i.test(ext)) {
      req.headers.accept = mime.lookup(ext);
      req.url = req.url.replace(regex, '$1');
    }
    return next();
  };

  exports = module.exports = virtual;

}).call(this);
