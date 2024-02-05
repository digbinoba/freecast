'use client';
import styles from '../styles';
import { ChangeEvent, useState } from 'react';
import { sendResendEmail } from '@/app/api/send/route';
export interface emailFormData {
  email: string;
  message: string;
  subject: string;
}
const Contact = () => {
  const [formData, setFormData] = useState<emailFormData>({
    email: '',
    message: '',
    subject: '',
  });
  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    //Prevent from refreshing
    event.preventDefault();

    //Attempt to send the email
    const response = await sendResendEmail(formData);

    //On success
    if (response?.success) {
      //clear the form
      alert('Email was sent!');
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: '',
        message: '',
        subject: '',
      }));
    } else {
      alert('sorry there was a problem sending an email')
    }
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <section className={`${styles.paddings} relative z-10 `} id="contact">
      <div className="absolute w-[50%] inset-0 gradient-03" />

      <div className="flex justify-center flex-col items-center">
        <h1 className={`${styles.sectionHeader}`}>Contact Me</h1>
        <h1 className={`${styles.sectionSubtitle} mb-4`}>
          <p>Got a question or a proposal for a project?</p>
          <p>Or do you want to say hello?</p>
          <p>Feel free to message me anytime!</p>
        </h1>
        <div className="flex justify-center items-center w-[75%] flex-col lg:flex-row">
          <form
            className="flex flex-col w-[60%] mr-10 sm:w-full"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className={`${styles.labelText}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`${styles.inputContainer}`}
              onChange={handleChange}
              placeholder="Enter your email address"
              value={formData.email}
              required
            />

            <label htmlFor="subject" className={`${styles.labelText}`}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className={`${styles.inputContainer}`}
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the Subject Line"
              required
            />

            <label htmlFor="message" className={`${styles.labelText}`}>
              Message
            </label>
            <textarea
              className={`${styles.inputContainer}`}
              onChange={handleChange}
              value={formData.message}
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              rows={5}
            />
            <button className={`${styles.customButton} mt-8`} type="submit">
              Send!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
