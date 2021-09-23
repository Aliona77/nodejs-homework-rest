const { contactsOperations } = require('../../model')
const { contactSchema } = require('../../schema')

const updateContact = async (req, res, next) => {
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
}

module.exports = updateContact;