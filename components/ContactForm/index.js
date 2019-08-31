import React, { useState } from 'react';
import '../../static/styles/contact-form.scss';

const ContactForm = () => {
  const [didContact, setDidContact] = useState(false);
  if (didContact) {
    return (
      <div>
        <p>Message Sent! 🎉</p>
        Thanks for reaching out. I'll get back to you as soon as I can :)
      </div>
    )
  }
  return (
    <form className="contact-form" name="contact" method="POST" netlify-honeypot="gotcha" data-netlify="true">
      <div className="gotcha">
        <label>Don’t fill this out if you're human: <input name="gotcha" /></label>
      </div>
      <div>
        <label>Name <input type="text" name="name" required /></label>
      </div>
      <div>
        <label>Email <input type="email" name="email" required /></label>
      </div>
      <div>
        <label>Message: <textarea name="message" required></textarea></label>
      </div>
      <div>
        <button type="submit" onSubmit={() => setDidContact(true)}>Send</button>
      </div>
    </form>
  );
}
export default ContactForm;