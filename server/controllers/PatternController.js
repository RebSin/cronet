const connection = require('../database/mySQLConnection')
const express = require('express')
const router = express.Router()

// CREATE A pattern
router.post('/', (req, res) => {
  const { name, description, steps } = req.body
  connection.query(
    'INSERT INTO patterns (name, description, steps) VALUES (?, ?, ?)', [name, description, steps],
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
  connection.query(
    'SELECT * FROM patterns',
    (err, results) => {
      if (!err) {
        res.send(results)
      } else {
        console.log(err)
      }
    }
  )
})

// UPDATE A pattern
router.put('/', (req, res) => {
  const id = req.body.id
  const name = req.body.name
  connection.query(
    'UPDATE patterns SET name = ? WHERE id = ?', [name, id],
    (err, results) => {
      if (!err) {
        res.send(results)
        console.log('Successfully updated pattern ' + req.body.name)
      } else {
        console.log(err)
      }
    }
  )
})

// DELETE A pattern
router.delete('/:id', (req, res) => {
  const id = req.params.id
  connection.query(
    'DELETE FROM patterns WHERE id = ?', id,
    (err, results) => {
      if (!err) {
        res.send(results)
        console.log('Successfully deleted pattern ' + req.body.name)
      } else {
        console.log(err)
      }
    }
  )
})
module.exports = router
