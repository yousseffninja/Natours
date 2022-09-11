const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    auth: {
      user: '09d2bf1dafbab2',
      pass: 'e579cf012cbfac',
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 5 * 60 * 1000,
  });

  // 2) Define the email options
  const emailOptions = {
    from: 'Yu-kun <hello@jonas.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html: ,
  };

  // 3) Acually send the email
  await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
