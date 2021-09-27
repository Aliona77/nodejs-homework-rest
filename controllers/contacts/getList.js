const { contactsModel } = require('../../model')
const { sendSuccessRes } = require('../../helpers')

const getList = async (req, res) => {
  const result = await contactsModel.getList()
  sendSuccessRes(res, { data: result })
}
module.exports = getList;