if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
};
const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service: 'yahoo',
    secure: false,
    service: "yahoo",
    auth: {
        user: process.MAIL_USER,
        pass: process.MAIL_PASS
    },
    logger: true
});

const message = {
    from: process.MAIL_USER,
    to: "jkrzeszycha@gmail.com",
    subject: "Test Mail",
    text: "Good Morning! Hello World!"
};

transporter.sendMail(message, function (err, response) {
    if (err) {
        console.log(err);
    }
    console.log('Email Sent: ' + response);
    transporter.close();
});