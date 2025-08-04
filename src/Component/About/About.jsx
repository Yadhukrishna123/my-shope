import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div style={{ height: "750px" }}>
      <h1 className='text-center mt-5'>About Us</h1>

      <div className='about-parent mt-5 d-flex'>
        <div className='left-session'>
          <h2 className='text-center'>Who we are</h2>
          <p style={{ lineHeight: "30px" }} className='w-75 m-auto mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
        </div>
        <div className='right-session'>
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img-1024x576.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About