import formData from 'form-data';
import Mailgun from 'mailgun.js';
import otp from 'otp-generator';
import { getEmailHTML, EmailSubjects, EmailTemplates } from './html-templates';
import { UpdateAdminDto } from '@partiaf/entities';

const MAILGUN_KEY = process.env.MAILGUN_KEY || 'anymailgunparameter';

const mailgun = new Mailgun(formData);
const DOMAIN = 'sandbox2735ce1d8bb34a27b7f30691bdd07bb2.mailgun.org';
const mg = mailgun.client({
  username: 'PARTIAF',
  key: MAILGUN_KEY,
});

type EmailTemplateType = 'verification' | 'changePassword' | 'resetPassword';

export const sendEmail = async (
  data: UpdateAdminDto,
  templateType: EmailTemplateType,
  generateCode: boolean
) => {
  const htmlTemplate = EmailTemplates[templateType];

  const code = otp.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  const html = getEmailHTML(htmlTemplate, code);

  const dataMessage = {
    from: 'noreply@partiaf.com',
    to: data.email,
    subject: EmailSubjects[templateType],
    text: EmailSubjects[templateType],
    html: html,
  };

  try {
    mg.messages
      .create(DOMAIN, dataMessage)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

    return generateCode ? code : undefined;
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      console.log('Hubo un error inesperado.');
    }
  }
};
