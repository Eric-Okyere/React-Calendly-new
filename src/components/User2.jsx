import React from 'react'
import twillio from "../Sos/twilio.png"
import ebay from "../Sos/ebay.png"
import drop from "../Sos/drop.png"
import compass from "../Sos/Compass.png"
import lazboy from "../Sos/Lazboy.png"



function User2() {
  return (
    <>
    <div className='container usercont'>
    <div className='row'>
    <div class="col-md-12 di2">
 
    <h2  class="sim">Trusted by more than 50,000 of the
   <b>world's leading organizations</b>  users worldwide </h2>
      <div class="text-center"> 
      <img src={twillio} class="patners" alt=""/> 
       <img src={ebay} class="patne" alt=""/> 
       <img src={drop} class="patner" alt=""/> 
       <img src={compass} class="patners" alt=""/> 
       <img src={lazboy} class="patners" alt=""/> 
      </div>
</div>
    </div>
    </div>
    
    </>
  )
}

export default User2