const getList = require('./getList')

const getContactById = async (id) => {
  const contacts = await getList()
  const contact = contacts.find(item => item.id === id)
  if (!contact) {
    return null
  }
  return contact
}

module.exports = getContactById
