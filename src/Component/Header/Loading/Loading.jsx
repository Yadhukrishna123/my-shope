import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
            <h2 className='fs-3 text-secondary'>Loading......</h2>
            <Spinner className='mt-1 d-flex justify-content-center align-items-center' variant="secondary" animation="border" role="status">
                <span className="visually-hidden "> loading</span>
            </Spinner>

        </div>
  )
}

export default Loading