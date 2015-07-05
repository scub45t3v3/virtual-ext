path = require 'path'
mime = require 'mime'

virtual = (req, res, next) ->
  ext = path.extname req.path
  regex = new RegExp "#{ext}(\\?.+|)$"

  if /[a-z]/i.test(ext)
    req.headers.accept = mime.lookup ext
    req.url = req.url.replace regex, '$1'

  return next()

exports = module.exports = virtual
