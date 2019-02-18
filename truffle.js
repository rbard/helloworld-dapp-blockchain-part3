// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    ganache: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 4700000
    },
    rinkeby: {
      host: "127.0.0.1", // Connect to geth on the specified
      port: 8545,
      from: "0xE0187CA97808447F879BbC6A1Db74834f9Bfbe2F", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4700000 // Gas limit used for deploys
    }
  }
}
