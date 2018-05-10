path = require 'path'
mime = require 'mime'

virtual = (req, res, next) ->
  accept = mime.getType req.path
  ext = path.extname req.path
  regex = new RegExp "#{ext}(\\?.+|)$"
  url = req.url.replace regex, '$1'

  if accept && url != req.url
    req.headers.accept = accept
    req.url = url

  return next()

module.exports = virtual
