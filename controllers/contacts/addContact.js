const { contactsModel } = require('../../model')
const { sendSuccessRes } = require('../../helpers')

const addContact = async (req, res) => {
  const result = await contactsModel.addContact(req.body)
  sendSuccessRes(res, { data: result }, 201)
}

module.exports = addContact;