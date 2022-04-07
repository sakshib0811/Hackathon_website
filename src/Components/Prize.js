import React from 'react'
import "./Prize.css"
import logo2 from "./images/logo2.png"
import logo3 from "./images/logo3.png"
function Prize() {
  return (
      <div>
    <div className='prize'>
        <div className="sub_topic1">
            <p className='ph'>
                Build the whole ecosystem of your own
            </p>
            <p className='disc1'>
            At ETH Bangalore, we have the support of a huge community of professionals, mentors, sponsors, developer advocates, and other community members who want to help  build the best.
            </p>
        </div>
        <div className="sub_topic2">
            <div className="sub">
                <img src={logo2} className='logo2'></img>
                <p className='disc'>Become a part of the global community of developers who care about the vision of a better decentralized internet.</p>
            </div>
            <div className="sub">
                <img src={logo3} className='logo2'></img>
                <p className='disc'>
               We help you to introduce your teammates, connect  with mentors, solve technical problems, and help  deliver actionable products that enhance the blockchain ecosystem.
                </p>
            </div>
        </div>
        </div>
        <div className="sub_topic3">
            $400,000+
        </div>
        <p className='won'>Prize to be won</p>
    </div>
  )
}

export default Prize