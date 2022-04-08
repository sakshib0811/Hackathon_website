import React from 'react'
import "./Venue.css"
import venue4 from "./images/venue4.jpg"
import { ImLocation2, ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { SiFirefoxbrowser } from 'react-icons/si';
function Venue() {
  return (
    <div className='venue'>
        <h1 className='venue_head'>
            The Venue
        </h1>
        <div className='venue1'>
            <img src={venue4} className='venue_img'></img>
            <h5 className='address'>
                <p className='aloft'>Aloft Bengaluru Whitefield </p>
               <ImLocation2 /> 17C, Sadaramangala Rd, Whitefield, Bengaluru, Karnataka 560066
                <br />
                <ImPhone /> Tel. No.: 08066707777
                <br />
                <MdEmail />E-mail: info.slbl@aloft.com
                <br />
                <SiFirefoxbrowser />Website:https://www.marriott.com
                <br />
                <form action='https://www.google.com/maps/place/Aloft+Bengaluru+Whitefield/@12.9902299,77.7304401,17z/data=!4m18!1m9!3m8!1s0x3bae16773e7dc413:0xc69742ae19c2262d!2sAloft+Bengaluru+Whitefield!5m2!4m1!1i2!8m2!3d12.9902299!4d77.7326288!3m7!1s0x3bae16773e7dc413:0xc69742ae19c2262d!5m2!4m1!1i2!8m2!3d12.9902299!4d77.7326288' target="_blank"> 
                <button className='dir'>Get Direction</button>
                </form>
               
            </h5>
        </div>
        
    </div>
  )
}

export default Venue