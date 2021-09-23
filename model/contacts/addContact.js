const { v4 } = require('uuid')
const fs = require('fs/promises')
const path = require('path')

const updateContacts = require('./updateContacts')
const getList = require('./getList')

const addContact = async (data) => {
  const contacts = await getList()
  const newContact = { ...data, id: v4() }
  contacts.push(newContact)
  await updateContacts(contacts)
  return newContact
}

module.exports = addContact
