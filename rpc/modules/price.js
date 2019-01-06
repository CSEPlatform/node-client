import PriceService from '../../services/price'
import { validators, middleware } from '../validation'
import ErrorCode from '../error-code'
class Fee {
  constructor (opts) {
    this._logger = opts.logger
    this._price = new PriceService()
    this._error = new ErrorCode()
    this.getFeeByCoin = middleware(this.getFee.bind(this), 1, [
      [validators.coinAsset]
    ])
  }
  async getPrice (params, cb) {
    try {
      let price = await this._price.getPriceByCSE()
      if (!price) throw this._error.internalError('PRICE_NOT_FOUND')
      return cb(null, { unit: 'USDT', price: Number(price.price) })
    } catch (err) {
      return cb(err)
    }
  }
  async getFee (params, cb) {
    try {
      const coinAsset = 'CSE'
      let fee = await this._price.getFeeByCoin(coinAsset)
      if (!fee) throw this._error.internalError('FEE_NOT_FOUND')
      return cb(null, { unit: 'CSE', fee: Number(fee.fee) })
    } catch (err) {
      return cb(err)
    }
  }
}
module.exports = Fee
