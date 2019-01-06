import Service from './service'
class FeeService extends Service {
  constructor () {
    super('fee', {})
  }
  getPriceByCSE () {
    return this.fetch('getPriceByCSE', [])
  }
  getFeeByCoin (coinAsset) {
    return this.fetch('getFeeByCoin', [coinAsset])
  }
}
export default FeeService
