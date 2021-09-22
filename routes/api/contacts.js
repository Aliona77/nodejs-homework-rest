const express = require('express')
const router = express.Router()

const contactsOperations = require('../../model/contacts')

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
    // res.json({
    //   contacts
    // })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await contactsOperations.getContactById(id)
    if (!result) {
      const error = new Error(`Contact with id=${id} not found`)
      error.status = 404
      throw error
      // res.status(404).json({
      //   status: 'error',
      //   code: 404,
      //   message: `Contact with id=${id} not found`
      // })
      // return
    }
    res.json({
      status: 'saccess',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
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

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.patch('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router