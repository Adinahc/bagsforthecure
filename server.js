const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

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
    res.send({ express: 'Email Sent' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));