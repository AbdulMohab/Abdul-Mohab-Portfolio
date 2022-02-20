import { useState } from "react";
import "./contact.scss"

export default function Contact() {

  const [message, setMessage] = useState(false);
  const handleSubmit = (e)=>{ 
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contact' id="contact">
      <div className="left"><img src="https://img.freepik.com/free-photo/woman-working-call-center_23-2148094886.jpg?w=740" alt="" /></div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit} >
          <input type="name" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" >
 
          </textarea>
          <button type="submit">
            Send
          </button>
          {message && <span>Thanks, I'll Reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
