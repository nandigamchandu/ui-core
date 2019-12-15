
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./devfractal-ui-core.cjs.production.min.js')
} else {
  module.exports = require('./devfractal-ui-core.cjs.development.js')
}
