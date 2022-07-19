import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";
import Lottie from "lottie-react";
import mail_animation from "../assets/mail_animation.json";
const Contact = () => {
  const form = useRef();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4ac32w9",
        "template_ki8cnp4",
        form.current,
        "ztNYNxc0c9saE-TJG"
      )
      .then(
        (response) => {
          console.log("SUCCESS!",response.text);
        },
        (err) => {
          console.log("FAILED...",err.text);
        }
      );
  };

  return (
    <div id="contact" className={styles.contact}>
      <h1>Contact</h1>
      <p>
        I&apos;m interested in freelance opportunities,  any kinds of projects.
        However, if you have other request or question feel free to contact me.
      </p>
      <div className={styles.contact_main}>
        <div className={styles.contact_left}>
          <Lottie
            className={styles.mail_animation}
            height={60}
            width={20}
            animationData={mail_animation}
          />
        </div>
        <div className={styles.contact_right}>
          <form ref={form} onSubmit={sendMessage}>
            <div className={styles.input_first_row}>
              <div>
                <input
                  required
                  name="name"
                  type="text"
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  required
                  name="email"
                  type="email"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                  placeholder="Email"
                />
              </div>
            </div>

            <div className={styles.subject}>
              <input
                required
                name="subject"
                type="text"
                value={userDetails.subject}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, subject: e.target.value })
                }
                placeholder="Subject"
              />
            </div>

            <div className={styles.textarea}>
              <textarea
              rows="12"
                required
                name="message"
                placeholder="Message"
                value={userDetails.message}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, message: e.target.value })
                }
              ></textarea>
            </div>

            <div className={styles.form_submit}>
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
