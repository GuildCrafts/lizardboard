const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

const mailer = nodemailer.createTransport(smtpTransport(`smtps://${process.env.MAILER_EMAIL}:${process.env.MAILER_PASSWORD}@smtp.gmail.com`))

const sendWelcomeEmail = user => {
  console.log(user)
  console.log('sending email')
  console.log(process.env.MAILER_PASSWORD)
  return mailer.sendMail( welcomeEmail(user.email, user.username) )
}

const welcomeEmail = ( userEmail, userName ) => {
  return {
    from: '"Lizardboard" <noreply@lizardboard.com>',
    to: userEmail,
    subject: `Are You Ready For Lizards, ${userName}?`,
    text: "Welcome to Lizardboard",
    html: "<p>We have so many lizards.</p>"
  }
}


module.exports = { sendWelcomeEmail }
