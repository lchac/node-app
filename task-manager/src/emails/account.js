const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
    to: 'me@mymail.com',
    from: 'me@mymail.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you',
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })