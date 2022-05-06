const connection = require('../database/mySQLConnection')
const express = require('express')
const router = express.Router()

// CREATE A pattern
router.post('/', (req, res) => {
  const { name, description, steps } = req.body
  const sql = `INSERT INTO patterns (name, description, steps) VALUES ('${name}', '${description}', '${steps}')`
  connection.query(
    sql,
    (err, results) => {
      if (!err) {
        res.send(results)
        console.log('Successfully created pattern ' + req.body.name)
      } else {
        console.log(err)
      }
    }
  )
})

// GET ALL patterns
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM patterns'
  connection.query(
    sql,
    (err, results) => {
      if (!err) {
        res.send(results)
      } else {
        console.log(err)
      }
    }
  )
})

module.exports = router
