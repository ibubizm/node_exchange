const db = require('../db')

const convertLogger = (req, res, next) => {
  const { firstValue, secondValue, amount } = req.body
  const paire = `${firstValue}-${secondValue}`.toUpperCase()
  db.query(
    `INSERT INTO convert_logs ( paire, amount) VALUES ('${paire}', '${amount}')`,
    (err, result) => {
      if (err) {
        throw err
      }
    }
  )
  next()
}

module.exports = convertLogger
