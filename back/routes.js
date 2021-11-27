const express = require('express')

const { Person } = require('./db/database')

const { v4: uuidv4 } = require('uuid')

const route = express.Router()

route.get('/', async (req, res) => {
  const people = await Person.findAll()
  return res.send(people)
})

route.post('/', async (req, res) => {
  await Person.create({ id: uuidv4(), ...req.body })
  const people = await Person.findAll()
  return res.send(people)
})

route.delete('/del', async (req, res) => {
  const { id } = req.headers
  await Person.destroy({ where: { id: id } })
  const people = await Person.findAll()
  return res.send(people)
})

module.exports = route
