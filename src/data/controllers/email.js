import sendgrid from 'sendgrid';
const helper = sendgrid.mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

export default (req, res, next) => {
  const fromEmail = new helper.Email(req.body.email);
  const toEmail = new helper.Email('jonathan.emig@gmail.com');
  const subject = 'MeetupCannabis';
  const content = new helper.Content('text/plain', req.body.message + ' - ' + req.body.name);
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);

  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log(error.response.body.errors);
      return res.status(200).send(error.response.body.errors[0].message);
    } else {
      return res.send({status: 'OK'});
    }
  });
}