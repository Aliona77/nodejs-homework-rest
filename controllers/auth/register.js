const { User } = require('../../models')
const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const { v4: uuidv4 } = require('uuid')
const { sendEmail } = require('../../helpers')

const register = async (req, res) => {
  const { email, password, subscription } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const avatarUrl = gravatar.url(email)

  const verifyToken = uuidv4()
  const newUser = new User({
    email,
    subscription,
    avatarUrl,
    verifyToken
  })
  newUser.setPassword(password)
  await newUser.save()

  const emailData = {
    to: email,
    subject: 'Подтверждение регистрации на сайте',
    html: `
        <a href= 'http:localhost:3000/api/auth/verify/${verifyToken}' target = '_blank'> Подтвердить почту</a>
    `

  }
  await sendEmail(emailData)

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
    status: 'success',
    code: 201,
    message: 'Success register',
    data: {
      verifyToken
    }
  })
}

module.exports = register;