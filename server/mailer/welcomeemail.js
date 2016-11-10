const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

const mailer_account = {
  email: process.env.MAILER_EMAIL,
  password: process.env.MAILER_PASSWORD
}
const mailer = nodemailer.createTransport(smtpTransport(
  `smtps://${mailer_account.email}:${mailer_account.password}@smtp.gmail.com`)
)

const sendWelcomeEmail = user => {
  return mailer.sendMail( welcomeEmail(user.email, user.username) )
}

const welcomeEmail = ( userEmail, userName ) => {
  return {
    from: '"Lizardboard" <noreply@lizardboard.com>',
    to: userEmail,
    subject: `Are You Ready For Lizards, ${userName}?`,
    text: "Welcome to Lizardboard",
    html: `<p style="font-family:serif; font-size:20px">Hi ${userName}, <br>I wanted to personally welcome you and
    congratulate you on joining Lizardboard. <br>We've made it super easy
    to get started. Just start! <br> Cheers, <br>The Lizardboard Team </p>`
  }
}


module.exports = { sendWelcomeEmail }
