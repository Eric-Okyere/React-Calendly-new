import React from 'react'
import logg from "../Sos/HomePage_GIF1_BG_2.png"

function Part1() {
  return (
    <>
    <div className='container'>
   <div className='row'>
   


   <div className="col-md-6 partdi">
   <h1 class="parah"> Easy  Scheduling <br /> <a className='ahead'>ahead</a>  </h1>
   <h6 className='para2'>Calendly is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ut itaque reiciendis non eum a accusantium ab quia sequi, cupiditate odit quaerat dolores libero, laudantium ullam, maiores quod eos quam? </h6>
    <div className='signindiv'>
    <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button className="btn sign btn-secondary" type="button" id="button-addon2">sign up</button>
      </div>
    <p>creat your free account. No creadit card required</p>
    </div>


    <div className="col-md-6 partdi">
    <img className="ima2" src={logg} alt="" />
    </div>
    
 
   </div>

   </div>
    
    </>
  )
}

export default Part1