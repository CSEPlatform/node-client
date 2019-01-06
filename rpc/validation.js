const ErrorCode = require('./error-code').default
const errorCode = new ErrorCode()
const validator = require('validator')
module.exports = {
  /**
   * middleware for parameters validation
   * @memberof module:rpc
   * @param {Function} method            function to add middleware
   * @param {number} requiredParamsCount required parameters count
   * @param {Function[]} validators      array of validator
   */
  middleware (method, requiredParamsCount, validators) {
    return function (params, cb) {
      if (params.length < requiredParamsCount) {
        const err = errorCode.invaildParams(
          `missing value for required argument ${params.length}`
        )
        return cb(err)
      }

      for (let i = 0; i < validators.length; i++) {
        if (validators[i]) {
          for (let j = 0; j < validators[i].length; j++) {
            const err = validators[i][j](params, i)
            if (err) {
              return cb(err)
            }
          }
        }
      }

      method(params, cb)
    }
  },

  /**
   * @memberof module:rpc
   */
  validators: {
    /**
     * hex validator to ensure has "0x" prefix
     * @param {any[]} params parameters of method
     * @param {number} index index of parameter
     */
    hex (params, index) {
      let err
      if (params[index].substr(0, 2) !== '0x') {
        err = errorCode.invaildParams(
          `invalid argument ${index}: hex string without 0x prefix`
        )
      }

      return err
    },

    /**
     * hex validator to validate block hash
     * @param {any[]} params parameters of method
     * @param {number} index index of parameter
     */
    blockHash (params, index) {
      let err
      let blockHash = params[index]

      if (!/^[0-9a-fA-F]+$/.test(blockHash) | (blockHash.length !== 64)) {
        err = errorCode.invaildParams(
          `invalid argument ${index}: invalid block hash`
        )
      }

      return err
    },

    /**
     * bool validator to check if type is boolean
     * @param {any[]} params parameters of method
     * @param {number} index index of parameter
     */
    bool (params, index) {
      let err
      if (typeof params[index] !== 'boolean') {
        err = errorCode.invaildParams(
          `invalid argument ${index}: argument is not boolean`
        )
      }

      return err
    },
    empty (params, index) {
      let err
      if (params[index] === '') {
        err = errorCode.invaildParams(`cannot empty`)
      }
      return err
    },
    coinAsset (params, index) {
      let err
      if (typeof params[index] !== 'string') {
        err = errorCode.invaildParams(
          `invalid argument ${index}: invalid coin asset`
        )
      } else if (!/\b(?:BTC|ETH|CSE|LTC|BCH)\b/.test(params[index])) {
        err = errorCode.invaildParams(
          `invalid argument ${index}: invalid coin asset`
        )
      }
      return err
    },
    address (params, index) {
      let err
      if (typeof params[index] !== 'string') {
        err = errorCode.invaildParams(
          `invalid argument ${index}: invalid coin address`
        )
      } else if (params[index] === '') {
        err = errorCode.invaildParams(`address cannot empty`)
      }
      return err
    },
    amount (params, index) {
      let err
      if (typeof params[index] !== 'number') {
        err = errorCode.invaildParams(
          `invalid argument ${index}: invalid coin amount`
        )
      } else if (params[index] === '') {
        err = errorCode.invaildParams(`amount cannot empty`)
      }
      return err
    },
    mongoId (params, index) {
      let err
      if (!validator.isMongoId(params[index])) {
        err = errorCode.invaildParams(
          `invalid argument ${index}: invalid mongoId`
        )
      }
      return err
    },
    pagination (params, index) {
      let err
      if (typeof params[index] !== 'object') {
        err = errorCode.invaildParams(
          `invalid argument ${index}: argument is not pagination`
        )
      } else if (
        !params[index].hasOwnProperty('limit') ||
        !params[index].hasOwnProperty('page')
      ) {
        err = errorCode.invaildParams(
          `invalid argument ${index}: argument is not pagination`
        )
      }
      return err
    },
    type (params, index) {
      let err
      if (!/\b(?:ALL|SEND|RECEIVE)\b/.test(params[index])) {
        err = errorCode.invaildParams(`invalid argument ${index}: invalid type`)
      }
      return err
    }
  }
}
