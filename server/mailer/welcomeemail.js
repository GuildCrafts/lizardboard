import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'

const sgOptions = {
  auth: {
    api_user: 'SENDGRID_USERNAME',
    api_key: 'SENDGRID_PASSWORD'
  }
}

const mailer = nodemailer.createTransport(sgTransport(sgOptions))

const sendWelcomeEmail = user => {
  return mailer.sendMail( welcomeEmail(user.email, user.name) )
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
