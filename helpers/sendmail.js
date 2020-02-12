module.exports = (email, subject, message) => {
  require('dotenv').config()
  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // use SSL
      auth: {
          user: 'password@nafies.tech',
          pass: process.env.PASS
      }
  })

  const mailOptions = {
      from: 'password@nafies.tech',
      to: email,
      subject,
      html: message
  }

  transporter.sendMail(mailOptions, (err, info) => {
      if (err) throw err;
      console.log('Email sent: ' + info.response);
  })
}
