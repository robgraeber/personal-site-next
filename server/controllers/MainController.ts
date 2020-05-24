import { Request, Response } from 'express';
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY, CONTACT_EMAIL } from '../EnvConstants';

sgMail.setApiKey(SENDGRID_API_KEY);

function getEmailBody(subject: string, message: string): string {
  return `
Subject: ${subject}

Message: ${message}

--
This mail is sent via contact form on Rob Graeber http://www.robgraeber.com`;
}

export async function sendEmail(req: Request, res: Response) {
  console.log('Attempting to send mail:');

  const { senderName, email, subject, message } = req.body;

  if (senderName && email && subject && message) {
    console.log('Request valid, sending email');

    try {
      await sgMail.send({
        from: `${senderName} <${email}>`,
        to: CONTACT_EMAIL,
        subject: 'Message from RobGraeber.com',
        text: getEmailBody(subject, message),
      });

      console.log('Email sent successfully!');

      res.status(200).json({
        status: 'OK',
        results: 'Message successfully sent. Thanks!',
      });
    } catch (err) {
      console.log('Err:', err);

      res.status(500).json({
        status: 'ERROR',
        results: 'An error occurred!',
      });
    }
  } else {
    console.log('Err: Missing fields -', req.body);

    res.status(422).json({
      status: 'ERROR',
      results: 'An error occurred!',
    });
  }
}
