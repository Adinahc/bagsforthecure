const express = require('express');
var bodyParser = require('body-parser');
 
const app = express();
const port = process.env.PORT || 5000;

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.post('/api/sendMail', (req, res) => {
 
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');
    const msg = {
      to: 'adinahc@gmail.com',
      from: 'adinahc@gmail.com',
      subject: 'Bags for the Cure Registration',
      text: 'Registration'
    };
    sgMail.send(msg);
    console.log(req.body);
    //res.send({ express: 'Email Sent' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));