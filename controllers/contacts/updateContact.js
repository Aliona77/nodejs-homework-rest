const { NotFound } = require('http-errors')
const { contactsModel } = require('../../model')
const { sendSuccessRes } = require('../../helpers')

const updateContact = async (req, res) => {
  const { id } = req.params
  const result = await contactsModel.updateContactById(id, req.body)
  if (!result) {
    throw new NotFound(`Contacts with id=${id} not found`)
  }
  sendSuccessRes(res, { data: result })
}
module.exports = updateContact;