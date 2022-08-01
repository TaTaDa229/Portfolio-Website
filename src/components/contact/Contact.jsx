import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { SiZalo } from "react-icons/si";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m62ug7b",
        "template_iel5vou",
        form.current,
        "xPJgscGC6BT5qCCbA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail contact__option-icon />
            <h4>Email</h4>
            <h5>dattt229@gmail.com</h5>
            <a href="mailto:dattt229@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine contact__option-icon />
            <h4>Messenger</h4>
            <h5>Ta Thanh Dat</h5>
            <a href="https://m.me/BanhBaoNhanThit229" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiZalo contact__option-icon />
            <h4>Zalo</h4>
            <h5>0374098439</h5>
            <a href="https://zalo.me/0374098439" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
