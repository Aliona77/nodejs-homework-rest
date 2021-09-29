const { Contact } = require('../../models')
const { sendSuccessRes } = require('../../helpers')

const getList = async (req, res) => {
  const result = await Contact.find({})
  sendSuccessRes(res, { data: result })
}
module.exports = getList;