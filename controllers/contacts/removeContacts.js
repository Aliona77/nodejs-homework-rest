const { contactsModel } = require('../../model')

const removeContact = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await contactsModel.removeContact(id)
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
}

module.exports = removeContact;