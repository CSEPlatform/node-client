import Service from './service'
class WalletService extends Service {
  constructor () {
    super('wallet', {})
  }
  createExchangeWallet (apiKey, apiSecret) {
    console.log('api', apiKey, apiSecret)
    return this.fetch('createExchangeWallet', [apiKey, apiSecret])
  }
  getWalletByAddress (address) {
    return this.fetch('getBalance', [address])
  }
}

export default WalletService
