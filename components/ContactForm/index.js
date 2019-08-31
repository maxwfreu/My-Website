import React, { useState } from 'react';
import '../../static/styles/contact-form.scss';


export default class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showSuccess: false,
    }
  }

  componentDidMount() {
    const { search } = window.location;
    if (search.indexOf('success=1') > 0) {
      this.setState({
        showSuccess: true,
      });
    }
  }

  render() {
    if (this.state.showSuccess) {
      return (
        <div>
          <p>Message Sent! 🎉</p>
          Thanks for reaching out. I'll get back to you as soon as I can :)
        </div>
      );
    }

    return (
      <form
        className="contact-form"
        name="contact"
        method="POST"
        netlify-honeypot="gotcha"
        data-netlify="true"
        action="/?success=1"
      >
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
          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}
