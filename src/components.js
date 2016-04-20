const pattern = /\.(js|jsx)$/
const req = require.context('./components', true, /\.(js|jsx)$/)
const exports = {}

req.keys().forEach((key) => {
  exports[key.replace(pattern, '').replace('./', '')] = req(key).default
})

module.exports = exports
