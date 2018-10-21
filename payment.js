const ilp = require('ilp')
const spsp = require('ilp-protocol-spsp')
const debug = require('debug')('ilp-spsp')

// recipient is the payment pointer
// amount is 1 XRP = 10^9 units
module.exports.pay = async (recipient, amount) => {
  try {
    const plugin = ilp.createPlugin()
    debug('connecting plugin')
    await plugin.connect()

    debug('sending payment')
    await spsp.pay(plugin, {
      receiver: recipient,
      sourceAmount: amount
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }

  console.log('sent!')
  process.exit(0)
}