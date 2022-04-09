import React from 'react'
import "./Final.css"
import Nav from './Nav'
import final from './images/final.png'
function Final() {
  return (
    <div>
        <Nav />
        <div className="final">
             <p className='final_p'>HURREY!! YOU HAVE REGISTERED IN THE HACAKATHON 🎊🎊🎊 </p>
             <img src={final} alt="" className='final_img '/>
        </div>
       
    </div>
  )
}

export default Final