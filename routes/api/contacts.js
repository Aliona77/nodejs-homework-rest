const express = require('express')
const router = express.Router()

const { contactSchema } = require('../../schema')
const { controllerWrapper, validation } = require('../../middlewares')
const { contacts: ctrl } = require('../../controllers')

router.get('/', controllerWrapper(ctrl.getList))

router.get('/:id', controllerWrapper(ctrl.getContactById))

router.post('/', validation(contactSchema), controllerWrapper(ctrl.addContact))

router.put('/:id', validation(contactSchema), controllerWrapper(ctrl.updateContact))

router.delete('/:id', controllerWrapper(ctrl.removeContact))

module.exports = router