const { NotFound } = require('http-errors')
const { contactsModel } = require('../../model')
const { sendSuccessRes } = require('../../helpers')

const getContactById = async (req, res) => {
  const { id } = req.params
  const result = await contactsModel.getContactById(id)
  if (!result) {
    throw new NotFound(`Contacts with id=${id} not found`)
  }
  sendSuccessRes(res, { data: result })
}

module.exports = getContactById;