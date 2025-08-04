import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../CardProduct/CardProduct'

const WishList = () => {
    const isLoggin = useSelector((state)=>state.userAuth.isAuthentication)
    const wishList = useSelector((state)=>state.userAuth.userWishList)
    let wishListItems =wishList.length > 0 ? (
         wishList.map((product)=>{
        return(
            <CardProduct product={product}/>
        )
    })
    ):<p className='text-center mt-5'>Your wish list is empty</p>
    
   
    return (
     <div>
        <h2 className='text-center mt-5'>Your Wish list</h2>
           <div className='row mt-5 me-3  justify-content-center align-items-center'>

            {wishListItems}

        </div>
     </div>
    )
}

export default WishList