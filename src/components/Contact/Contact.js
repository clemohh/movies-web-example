import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
      >
        <span>Get in touch</span>
  
      </div>
      <div className="rightSide">
        <form id="contact-form" >
          <label htmlFor="name" className="text text-gray-900">Full Name</label>
          <input name="name" className="text text-gray-900" placeholder="Enter full name..." type="text" />
          <label htmlFor="email" className="text text-gray-900">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message" className="text text-gray-900" >Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button className="bg-gray-700" type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;