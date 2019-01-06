import Service from './service'
class ExchangeService extends Service {
  constructor () {
    super('exchange', {})
  }
  transfer (fromAddress, toAddress, amount, apiKey, apiSecret) {
    return this.fetch('transfer', [fromAddress, toAddress, amount, apiKey, apiSecret])
  }
}
export default ExchangeService
