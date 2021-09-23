const express = require('express')
const router = express.Router()

const { contactsController } = require('../../controllers')

router.get('/', contactsController.getList)

router.get('/:id', contactsController.getContactById)

router.post('/', contactsController.addContact)

router.put('/:id', contactsController.updateContact)

router.delete('/:id', contactsController.removeContact)

module.exports = router