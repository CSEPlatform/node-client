import Service from './service'
class BlockService extends Service {
  constructor () {
    super('block', {})
  }
  getLatestBlock () {
    return this.fetch('getLatestBlock', [])
  }
}
export default BlockService
