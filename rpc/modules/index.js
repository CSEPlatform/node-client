const moduleList = ['transaction', 'wallet', 'price', 'block']

moduleList.forEach(mod => {
  module.exports[mod] = require(`./${mod}`)
})

module.exports.list = moduleList
