import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { MOBILE_BREAKPOINT } from 'src/Constants';

const ContactPage = () => {
  const [statusText, setStatusText] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subjectInput, setSubjectInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusText('Submitting message..');

    try {
      const rsp = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderName: nameInput,
          email: emailInput,
          subject: subjectInput,
          message: messageInput,
        }),
      });
      const { results } = await rsp.json();

      if (rsp.status === 200) {
        [setNameInput, setEmailInput, setSubjectInput, setMessageInput].forEach((setInput) =>
          setInput('')
        );

        setStatusText(results);
      } else {
        throw new Error('Failed Request');
      }
    } catch {
      setStatusText('An error occurred!');
    }
  }

  return (
    <>
      <NextSeo title="Rob Graeber | Contact" />
      <div className="contents">
        <h1>Contact Me</h1>
        <p className="description">
          For all partnership inquiries, fan mail, and etc. I regularly check my email and will get
          back to you soon!
        </p>
        <form onSubmit={sendEmail}>
          <h4>Your Name</h4>
          <input
            className="mobile-full-width"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            type="text"
            placeholder="John Doe"
            required
          />
          <h4>Your Email</h4>
          <input
            className="mobile-full-width"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            type="email"
            placeholder="john@example.com"
            required
          />
          <h4>Subject</h4>
          <input
            className="mobile-full-width"
            value={subjectInput}
            onChange={(e) => setSubjectInput(e.target.value)}
            type="text"
            placeholder="Partnerships, Biz Ops, Fan Mail, etc"
            required
          />
          <h4>Message</h4>
          <textarea
            className="mobile-full-width"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            rows={10}
            required
          />
          <div>
            <button className="cta-btn mobile-full-width" type="submit">
              Submit
            </button>{' '}
            <span className="status-text">{statusText}</span>
          </div>
        </form>
      </div>

      <style jsx>
        {`
          h2 {
            margin-bottom: 0.6em;
          }
          h4 {
            font-size: 1.4em;
            margin-bottom: 5px;
          }
          textarea {
            border: 1px solid #cccccc;
            font-size: 1.25em;
            font-weight: 400;
            padding: 4px;
            box-sizing: border-box;
            width: 300px;
            margin-bottom: 12px;
          }
          input {
            border: 1px solid #cccccc;
            font-size: 1.25em;
            font-weight: 400;
            padding: 4px;
            box-sizing: border-box;
            width: 300px;
            margin-bottom: 12px;
            height: 31px;
          }
          .description {
            font-size: 1.4em;
            margin-bottom: 1.4em;
          }
          .status-text {
            font-size: 1.35em;
            margin-left: 0.9em;
          }

          @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
            .status-text {
              margin: 20px 0 0 0;
              font-size: 1.5em;
              text-align: center;
              display: block;
            }
            .description {
              font-size: 1.5em;
            }
            h4 {
              font-size: 1.5em;
            }
            input,
            textarea {
              font-size: 16px;
            }
            input {
              height: 34px;
            }
          }
        `}
      </style>
    </>
  );
};

export default ContactPage;
