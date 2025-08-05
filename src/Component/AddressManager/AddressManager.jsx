import "./AddressManager.css"
import { useSelector } from 'react-redux';

const AddressManager = () => {
    const user = useSelector((state) => state.userAuth.user)
    // console.log(user.addresses)
    let userAddress = user.addresses.map((address, index) => {
        return (
            <div key={index} className='bg-light m-5 address-parent'>
                <div className='create-address '>

                    <div className='d-flex'>
                        <h5 className='ms-2'>{address.fullName}</h5>

                        <h5 className='ms-4'>{address.phone}</h5>
                    </div>
                    <div>
                        <p className='ms-2'>{`${address.address},${address.phonecity_district_town},${address.state}, near ${address.landMark}`}</p>


                        <h5 className='ms-2'>{address.pincode}</h5>
                    </div>



                </div>
            </div>
        )

    })

    return (

        <div>
            {userAddress}
        </div>


    )
}

export default AddressManager