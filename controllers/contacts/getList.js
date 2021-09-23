const { contactsOperations } = require('../../model')

const getList = async (req, res, next) => {
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
}
module.exports = getList;