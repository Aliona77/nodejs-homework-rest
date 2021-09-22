const getList = require('./getList');
const updateContacts = require('./updateContacts');

const removeContact = async (id) => {
  const contacts = await getList();
  const idx = contacts.findIndex(item => item.id === id);
  if (idx === -1) {
    return null;
  }
  //const newContacts = contacts.filter(item => item.id !== id);
  contacts.splice(idx, 1);
  await updateContacts(contacts);
  return "Success remove"
}

module.exports = removeContact;