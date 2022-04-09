import React from 'react'
import "./Footer.css"
import { BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
function Footer() {
  return (
    <div className='footer'>
        <div className='subfooter'>
            <div className="footer_para">
                <p className='footer_data'>Contact Us</p>
                <p className='footer_data'>Help</p>
                <p className='footer_data'>Event</p>
            </div> 
            <div className="footer_icon">
                <p className='footer_data'><BsTwitter /></p>
                <p className='footer_data'><MdEmail /></p>
            </div>
        </div>
    </div>
  )
}

export default Footer