import React from 'react'
import "./mailList.css"
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder='Your Email'/>
        <button>Substribe</button>
      </div>
    </div>
  )
}

export default MailList


