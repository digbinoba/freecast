'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log('running on server');
  const message = formData.get('message')
  console.log(message)
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delanoigbinoba@gmail.com',
    subject: 'Message from contact form',
    text: 'Hello world',
  });
};
