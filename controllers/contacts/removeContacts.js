const { NotFound } = require('http-errors')
const { contactsModel } = require('../../model')
const { sendSuccessRes } = require('../../helpers')

const removeContact = async (req, res) => {
  const { id } = req.params
  const result = await contactsModel.removeContact(id)
  if (!result) {
    throw new NotFound(`Contacts with id=${id} not found`)
  }
  sendSuccessRes(res, { message: 'Success  delete' })
}

module.exports = removeContact;