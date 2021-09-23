const { contactsOperations } = require('../../model')

const getContactById = async (req, res, next) => {
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
}

module.exports = getContactById;