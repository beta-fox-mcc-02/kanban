require('dotenv').config()
// console.log(process.env.PASS)


const mailer = (text) => {
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
      to: 'ghuroba.muslim@gmail.com',
      subject: 'Percobaan node mailer',
      text
  }

  transporter.sendMail(mailOptions, (err, info) => {
      if (err) throw err;
      console.log('Email sent: ' + info.response);
  })
}

mailer('Percobaan send email using nodemailer')