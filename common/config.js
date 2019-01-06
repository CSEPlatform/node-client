export const NodeLink = {
  host: process.env.NODE_HOST || 'localhost',
  port: process.env.NODE_PORT || 8545
}

export const NodeSocket = {
  host: process.env.NODE_WS_HOST || 'localhost',
  port: process.env.NODE_WS_PORT || 8555
}

export const Port = process.env.PORT || 1010
export const WSPort = process.env.WS_PORT || 2020

export const CSEAuth = {
  SocketKey: process.env.CSE_SOCKET_KEY || 'a792b07c3a5135d592d3fe28e2cc0da6bdd4daab2c9e90da3a4c0c521a6dbff3',
  APISecret: process.env.CSE_API_SECRET || 'PnXypFGZUXc6gFwU',
  APIKey: process.env.CSE_API_KEY || 'z2EtD6PH68IG2a1RNQIDAQAB'
}
