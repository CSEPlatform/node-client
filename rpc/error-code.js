export const codes = Object.freeze({
  PARSE_ERROR: -32700,
  INVALID_REQUEST: -32600,
  METHOD_NOT_FOUND: -32601,
  INVALID_PARAMS: -32602,
  INTERNAL_ERROR: -32603
})

class ErrorCode {
  parseError (message = '') {
    return { code: codes.PARSE_ERROR, message }
  }
  invaildRequest (message = '') {
    return { code: codes.INVALID_REQUEST, message }
  }

  methodNotFound (message = '') {
    return { code: codes.METHOD_NOT_FOUND, message }
  }

  invaildParams (message = '') {
    return { code: codes.INVALID_PARAMS, message }
  }

  internalError (message = '') {
    return { code: codes.INTERNAL_ERROR, message }
  }
}

export default ErrorCode
