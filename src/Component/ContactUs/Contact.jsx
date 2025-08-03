import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div style={{height:"750px"}} className='contact-parent'>
       <div >
         <h5 className='text-center mt-5'>Have any queries?</h5>
        <h1 className='text-center '>We're here to help.​</h1>
       </div>

       <div className='d-flex mt-5  ' >
        <div className='sub-session'>
            <h4 className='text-center'>Sales</h4>
            <p className='m-auto w-75  '>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <h5 className='text-center'>1800 123 4567</h5>
        </div>
       <div className='sub-session'>
            <h4 className='text-center'>Sales</h4>
            <p className='m-auto w-75  '>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <h5 className='text-center'>1800 123 4567</h5>
        </div>
        <div className='sub-session'>
             <h4 className='text-center'>Sales</h4>
            <p className='m-auto w-75  '>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <h5 className='text-center'>1800 123 4567</h5>
        </div>
        <div className='sub-session'>
             <h4 className='text-center'>Sales</h4>
            <p className='m-auto w-75  '>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <h5 className='text-center'>1800 123 4567</h5>
        </div>
       </div>

       <div className='d-flex'>
        <div className='sub-session-2 mt-5'>
             <h5 className='text-center mt-5'>Don't be a stranger!</h5>
        <h1 className='text-center'>You tell us. We listen.​</h1>
        <p style={{lineHeight:"30px"}} className='w-75 m-auto'>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>
        </div>
        <div className='sub-session-2_1 mt-5'>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Subject'/>
            <input type="Email" placeholder='Email'/>
            <input style={{height:"100px"}} type="text" placeholder='Message'/>
             <button style={{border:"none"}} className='w-25 mt-3 p-3 ms-4 bg-primary text-light'>Send Message</button>
        </div>
       
       </div>
    </div>
  )
}

export default Contact