import React, { useContext } from 'react'
import "./Home.css"
import Home2 from '../Home2/Home2'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'
import { AllProductContexts } from '../../AllProductContext/AllProductContext'
import Featurs from '../../Featurs/Featurs'
import Home3 from '../Home3/Home3'
import Popup from '../../Popup/Popup'
import { Link } from 'react-router-dom'


const Home = () => {
    const { allProduct, loggedIn } = useContext(AllProductContexts)
    // console.log("allProductallProduct", allProduct)
   
  
    return (
        <div style={{height:"2800px"}}>
            <div className='hero-parent position-relative'>

                <div className='position-absolute first-section mt-5'>
                    <h1>Raining Offers For Hot Summer!</h1>
                    <h2>25% Off On All Products</h2>
                    <div className='buttons'>
                        <Link to="/search">
                        <button>shope now</button>
                        </Link>
                        <button >Find more</button>
                    </div>
                </div>
            </div>
            {/* {loggedIn === true ? <Home2 /> : <Popup />} */}
            <Home2 />
            <FeaturedProduct allProduct={allProduct} />
            <Home3 />
            <Featurs />

            {/* <input type="radio" onChange={handleInput}/> */}

        </div>
    )
}

export default Home