const sgMail = require('@sendgrid/mail')

const { SENDGRID_KEY } = process.env

sgMail.setApiKey(SENDGRID_KEY)

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: 'chaban_az14@nuwm.edu.ua'
  }
  await sgMail.send(email)
}
module.exports = sendEmail;