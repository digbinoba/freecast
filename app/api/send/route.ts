// 'use server';

// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';
// import { emailFormData } from '../components/Contact';
// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendResendEmail(data: emailFormData) {
//   const { email, subject, message } = data;
//   const subjectLineBuilder = `${email} - ${subject}`;

//   console.log('server is attempting to send email');

//   try {
//     const data = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['delanoigbinoba@gmail.com'],
//       subject: subjectLineBuilder,
//       text: message,
//     });
//     console.log('server sent the email');
//     return { success: true, data };
//   } catch (error) {
//     console.log('sorry the server had a problem');
//     return { success: false, error };
//   }
// }
'use server';

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();
  const subjectLineBuilder = `${email} - ${subject}`;

  console.log('server is attempting to send email');

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delanoigbinoba@gmail.com'],
      subject: subjectLineBuilder,
      text: message,
    });
    console.log('server sent the email');
    return NextResponse.json(data);
  } catch (error) {
    console.log('sorry the server had a problem');
    return NextResponse.json({ error });
  }
}
