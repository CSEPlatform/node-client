import jayson from 'jayson'
import { NodeLink } from '../common/config'
class Service {
  constructor (name = '', opts) {
    this._client = jayson.Client.http({
      port: NodeLink.port,
      hostname: NodeLink.host
    })
    this._name = name
  }

  getMethod (st) {
    return `${this._name}_${st}`
  }

  fetch (method, params = []) {
    return new Promise((resolve, reject) =>
      this._client.request(this.getMethod(method), params, function (
        err,
        error,
        result
      ) {
        if (err) reject(err)
        if (error) reject(error)
        resolve(result)
      })
    )
  }
}

export default Service
