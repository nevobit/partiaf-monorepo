import { generate } from 'otp-generator';
import { getEmailHTML, EmailSubjects, EmailTemplates } from './html-templates';
// import Mailgun from 'mailgun.js';
// import formData from 'form-data';
// import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { Resend } from 'resend';
import QRCode from "qrcode"
import { writeFileSync } from 'fs';

// const MAILGUN_KEY = process.env.MAILGUN_KEY || 'anymailgunparameter';

const { RESEND_KEY } = process.env;
// const mailerSend = new MailerSend({
//   apiKey: process.env.MAILER_KEY!,
// });

// const mailgun = new Mailgun(formData);
// const DOMAIN = 'partiaf-api.xyz';
// const mg = mailgun.client({
//   username: 'PARTIAF',
//   key: MAILGUN_KEY,
// });
const resend = new Resend("re_LiR3aLMg_EJQ6B5AUFF1Rn8iRwZHnbAbg");


type EmailTemplateType = 'verification' | 'changePassword' | 'resetPassword' | 'created';


export const sendEmailCreatedWork = async (data: any, templateType: EmailTemplateType) => {
  const htmlTemplate = EmailTemplates[templateType];

  const {  _id, ticket, status, email, isPaid, ...rest } = data._doc
  console.log("REST", rest)
  const qrCode = await QRCode.toBuffer(JSON.stringify({...rest, id: _id}));

  const i = `
    - Evento: Soonoro Fest
    - Fecha: 16 de Diciembre de 2023
    - Hora: 16:00 PM
  `
  const html = await getEmailHTML(htmlTemplate, i);

  const messageData = {
    from: 'Partiaf <noreply@partiaf.com>',
    to: data.email,
    subject: EmailSubjects[templateType],
    text: EmailSubjects[templateType],
    html: html
  };
  // const sentFrom = new Sender(messageData.from, "Partiaf");
  // const recipients = [
  //   new Recipient(data.email, "")
  // ];

  try {
    // mg.messages.create(DOMAIN, messageData).then(res => {
    //   console.log(res);
    // }).catch(error => {
    //   console.log(error);
    // });



const info = await resend.emails.send({
  from: messageData.from,
  to: messageData.to,
  subject: messageData.subject,
  html: messageData.html,
  attachments: [
    {
      filename: 'qrcode.jpg',
      content: qrCode,
    },
  ],
});
    // const emailParams = new EmailParams()
    // .setFrom(sentFrom)
    // .setTo(recipients)
    // .setReplyTo(sentFrom)
    // .setSubject(messageData.subject)
    // .setHtml(messageData.html)
    // .setText(messageData.text);
  
    // const info = await mailerSend.email.send(emailParams);
    console.log(info);
    return 'Succesfully sent';
  } catch (error: any) {
    console.log(error);
      throw new Error(error.message);
  }
} 