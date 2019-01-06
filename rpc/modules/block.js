import BlockService from '../../services/block'
import ErrorCode from '../error-code'
class Block {
  constructor (opts) {
    this._logger = opts.logger
    this._block = new BlockService()
    this._error = new ErrorCode()
  }
  async getLatestBlock (params, cb) {
    try {
      console.log('getLatestBlock')
      const blocks = await this._block.getLatestBlock()
      return cb(null, blocks)
    } catch (error) {
      return cb(error)
    }
  }
}
module.exports = Block
