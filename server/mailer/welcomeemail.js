const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')



const mailer = nodemailer.createTransport(smtpTransport('smtps://lizardboardmailer@gmail.com:lizardmail!@smtp.gmail.com'))

const sendWelcomeEmail = user => {
  console.log(user)
  console.log('sending email')
  return mailer.sendMail( welcomeEmail(user.email, user.username) )
}

const welcomeEmail = ( userEmail, userName ) => {
  return {
    from: '"LizardBoard" <noreply@lizardboard.com>',
    to: userEmail,
    subject: `Are You Ready For Lizards, ${userName}?`,
    text: "Welcome to Lizardboard, we have lizards.",
    html: "<p>Lizards~!</p>"
  }
}


module.exports = { sendWelcomeEmail }
