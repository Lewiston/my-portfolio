import React from 'react'
import './Contact.css'
import ClientLogo1 from '/assets/walmart.png'
import ClientLogo2 from '/assets/adobe.png'
import ClientLogo3 from '/assets/microsoft.png'
import ClientLogo4 from '/assets/facebook.png'
import FacebookIcon from '/assets/facebook-icon.png'
import TwitterIcon from '/assets/twitter.png'
import InstagramIcon from '/assets/instagram.png'
import YouTubeIcon from '/assets/youtube.png'

const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f8e4cfbe-f31a-42e8-9926-9b105ce9a299");
    
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
    <section id="contactPage">
        <div className="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum doloremque architecto optio, necessitatibus possimus dolore vel nemo, eveniet hic itaque alias ducimus officia id expedita sint voluptas placeat ratione.
            </p>
            <div className="clientImgs">
                <img src={ClientLogo1} alt="Client" className="clientImg" />
                <img src={ClientLogo2} alt="Client" className="clientImg" />
                <img src={ClientLogo3} alt="Client" className="clientImg" />
                <img src={ClientLogo4} alt="Client" className="clientImg" />
            </div>
        </div>

        <div className="contact" id='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit tenetur culpa provident pariatur molestias vero veritatis ut minus aspernatur, beatae id, totam, hic excepturi sed iusto! Laboriosam, et aperiam!</span>

            <form className="contactForm" onSubmit={onSubmit}>
                <input type="text" className="name" placeholder='Your Name' name='name'/>
                <input type="email" className="email" placeholder='Your Email' name='email'/>
                <textarea name="message" rows="5" placeholder='Your Message' className='msg'></textarea>
                <button className="submitBtn" type='submit' value="Send">Submit</button>
                <span>{result}</span>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Youtube" className="link" />
                    <img src={YouTubeIcon} alt="Twitter" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact