import React from 'react'
import error from '../../assets/errorpage.gif'
const ErrorPage = () => {
  return (
    <div className='text-center'>
        <h1>Sorry !!! Error 404 !!! Page Not Found</h1>
        <img src={error} alt="404 Error" width={800}/>
    </div>
  )
}

export default ErrorPage