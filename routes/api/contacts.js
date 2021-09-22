const express = require('express')
const router = express.Router()

const { contactSchema } = require('../../schema')
const contactsOperations = require('../../model/contacts')

// GET/api/contacts

router.get('/', async (req, res, next) => {
  try {
    const contacts = await contactsOperations.getList()
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: contacts
      }
    })
  } catch (error) {
    next(error)
  }
})

// GET/api/contacts/10

router.get('/:id', async(req, res, next) => {
  try {
    const { id } = req.params
    const result = await contactsOperations.getContactById(id)
    if (!result) {
      const error = new Error(`Contacts with id=${id} not found`)
      error.status = 404
      throw error
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  }
  catch (error) {
    next(error)
  }
})

// POST/api/contacts/10

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body)
    if (error) {
      const err = new Error(error.message)
      err.status = 400
      throw err
    }
    const result = await contactsOperations.addContact(req.body)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

// PUT/api/contacts/

router.put('/:id', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body)
    if (error) {
      const err = new Error(error.message)
      err.status = 400
      throw err
    }
    const { id } = req.params
    const result = await contactsOperations.updateContactById(id, req.body)
    if (!result) {
      const error = new Error(`Contact with id=${id} not found`)
      error.status = 404
      throw error
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

// DELETE/api/contacts/

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await contactsOperations.removeContact(id)
    if (!result) {
      const error = new Error(`Contact with id=${id} not found`)
      error.status = 404
      throw error
    }
    res.json({
      status: 'success',
      code: 200,
      message: 'Success  delete'
    })
  }
  catch (error) {
    next(error)
  }
})

module.exports = router;