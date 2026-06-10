function Contact() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <textarea
          rows="5"
          placeholder="Message"
          style={{
            padding:"15px",
            borderRadius:"12px"
          }}
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;