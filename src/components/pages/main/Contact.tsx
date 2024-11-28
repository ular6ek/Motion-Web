import styles from "./Contact.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h2>Send a message</h2>
        <form>
          <div className={styles.inputRow}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className={styles.inputRow}>
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Group or company" />
          <textarea placeholder="How can we help?" />
          <center>
            <button type="submit">Submit</button>
          </center>
        </form>
      </div>
      <div className={styles.contactInfoSection}>
        <h2>Contact Info</h2>
        <p>📞 +996 500 34 84 39</p>
        <p>📧 motionweb312@gmail.com</p>
        <div className={styles.socialIcons}>
          {/* Icons would be placed here */}
        </div>
        <div className={styles.map}>
          {/* Insert the map iframe or image here */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
