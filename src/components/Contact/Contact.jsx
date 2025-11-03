import React from 'react'
import './Contact.css'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0f192edd-b804-4093-a2d5-5783a8717ce5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact container" id='contact'>
      <h2 className='heading'>Let's build a project together</h2>
      <form className='contact-form' onSubmit={onSubmit}>
        <input type="text" placeholder='your name' required name='name'/>
        <input type="email" placeholder='your email' required name='email'/>
        <textarea name="message" id="message" rows="7" placeholder='your message'></textarea>
        <button className='btn'>let's talk</button>
        <p className="form-response">{result}</p>
      </form>
    </section>
  )
}

export default Contact