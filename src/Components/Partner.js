import React from 'react'
import "./Partner.css"
import spons1 from "./images/spons1.png"
import spons2 from "./images/spons2.png"
import spons3 from "./images/spons3.png"
import spons4 from "./images/spons4.png"
import spons5 from "./images/spons5.png"
import spons6 from "./images/spons6.png"
import spons7 from "./images/spons7.jpg"
import spons8 from "./images/spons8.jpg"
import spons9 from "./images/spons9.png"
import spons10 from "./images/spons10.png"
import spons11 from "./images/spons11.png"
import spons12 from "./images/spons12.png"
import spons13 from "./images/spons13.png"
import spons14 from "./images/spons14.png"
import spons15 from "./images/spons15.jpg"
function Partner() {
  return (
    <div>
        <h2 className='partner'>
        HACKATHON PARTNERS
        </h2>
        
        <div className="sub_partner">
            <div className="img1 img_first">
                <img src={spons1} className='spons_img1 hover_img'></img>
                <img src={spons2} className='spons_img2 hover_img'></img>
                <img src={spons3} className='spons_img3 hover_img'></img>
                <img src={spons4} className='spons_img4 hover_img'></img>
            </div>

            <div className="img1">
                <img src={spons5} className='spons_img5 hover_img'></img>
                <img src={spons6} className='spons_img6 hover_img'></img>
                <img src={spons7} className='spons_img7 hover_img'></img>
                <img src={spons8} className='spons_img8 hover_img'></img>
            </div>

            <div className="img1">
                <img src={spons9} className='spons_img9 hover_img'></img>
                <img src={spons10} className='spons_img10 hover_img'></img>
                <img src={spons11} className='spons_img11 hover_img'></img>
                <img src={spons12} className='spons_img12 hover_img'></img>
            </div>

            <div className="img1">
                <img src={spons13} className='spons_img13 hover_img'></img>
                <img src={spons14} className='spons_img14 hover_img'></img>
                <img src={spons15} className='spons_img15 hover_img'></img>
            </div>
            
           
           
           
        </div>
    </div>
  )
}

export default Partner