import React from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("✈️ Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0f192edd-b804-4093-a2d5-5783a8717ce5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Your Message Was Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact container" id="contact">
      <h2 className="heading">Let's build a project together</h2>
      <form className="contact-form" onSubmit={onSubmit}>
        <input type="text" placeholder="your name" required name="name" />
        <input type="email" placeholder="your email" required name="email" />
        <input
          type="tel"
          placeholder="your phone number"
          required
          name="telephone"
          minlength="7"
        />
        <textarea
          name="message"
          id="message"
          rows="7"
          placeholder="your message"
          required
        ></textarea>
        <button className="btn">Let's Talk</button>
        <p className="form-response">{result}</p>
        <div className="or">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
        </div>
        <a
          className="book-appointment"
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3HW6Ahhr4dcbs3aYCXPkpOOzSTiGy91RU9HFAsLEriqap6mWsaWxlRz44wQVs-RiFpNHmA0GB-"
        >
          🗓️ <span>Book an Appointment</span>
        </a>
      </form>
    </section>
  );
};

export default Contact;
