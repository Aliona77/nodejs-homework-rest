const express = require('express')
const router = express.Router()

const { joiUserSchema } = require('../../models/user')
const { controllerWrapper, validation, authenticate } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')

router.post('/register', validation(joiUserSchema), controllerWrapper(ctrl.register))

router.post('/login', validation(joiUserSchema), controllerWrapper(ctrl.login))

router.get('/logout', authenticate, controllerWrapper(ctrl.logout))

module.exports = router;