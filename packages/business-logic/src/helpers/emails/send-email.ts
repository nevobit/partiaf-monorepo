import formData from 'form-data';
import Mailgun from 'mailgun.js';
import {
  getEmailHTML,
  EmailSubjects,
  EmailTemplates,
  code,
} from './htmlTemplates';

const MAILGUN_KEY = process.env.MAILGUN_KEY || 'anymailgunparameter';
const mailgun = new Mailgun(formData);
const DOMAIN = 'partiaf-api.xyz';
const mg = mailgun.client({
  username: 'Partiaf',
  key: MAILGUN_KEY,
});

type EmailTemplateType = 'verification' | 'changePassword' | 'resetPassword';

type EmailData = {
  email: string;
  templateType: EmailTemplateType;
  generateCode: boolean;
};

export const sendEmail = async ({
  email,
  templateType,
  generateCode,
}: EmailData) => {
  const htmlTemplate = EmailTemplates[templateType];

  const html = getEmailHTML(htmlTemplate, generateCode);

  const data = {
    from: 'noreply@partiaf.com',
    to: email,
    subject: EmailSubjects[templateType],
    text: EmailSubjects[templateType],
    html: html,
  };

  try {
    const response = await mg.messages.create(DOMAIN, data);
    console.log(response);

    return generateCode ? code() : undefined;
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      console.error(error);
    }
  }
};
