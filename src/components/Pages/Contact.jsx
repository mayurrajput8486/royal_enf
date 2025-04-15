import React from 'react'

const Contact = () => {
  return (
    <div className='pb-5' style={{background : 'linear-gradient(90deg,rgba(164, 94, 214, 1) 45%, rgba(217, 160, 160, 1) 100%, rgba(179, 111, 29, 1) 3%)'}}>
        <h1 className='text-center'>Enquiry Form</h1>
        <div className='w-50 bg-dark p-4 text-light fw-bold rounded-3 mx-auto mt-5'>
          <form>
              <div className='mb-2'>
                <label className='fs-4'>Customer Full Name -</label>
                <input 
                  type='text' 
                  className='form-control'
                  placeholder='Enter Full Name'
                />
              </div>
              <div className='mb-2'>
                <label className='fs-4'>Customer Email -</label>
                <input 
                  type='email' 
                  className='form-control'
                  placeholder='Enter email'
                />
              </div>
              <div className='mb-2'>
                <label className='fs-4'>Customer Contact -</label>
                <input 
                  type='tel' 
                  className='form-control'
                  placeholder='Enter Contact'
                />
              </div>
              <div className='mb-2'>
                <label className='fs-4'>Customer Address -</label>
                <input 
                  type='text' 
                  className='form-control'
                  placeholder='Enter Address'
                />
              </div>
              <div className='mb-2'>
                <label className='fs-4'>Branch Location</label>
                <select className='form-control'>
                  <option value="">Select Branch</option>
                  <option value="Baner, Pune">Baner, Pune</option>
                  <option value="Chinchwad, Pune">Chinchwad, Pune</option>
                  <option value="Shivaji Nagar, Pune">Shivaji Nagar, Pune</option>
                  <option value="Koregaon Park, Pune">Koregaon Park, Pune</option>
                  <option value="Viman Nagar, Pune">Viman Nagar, Pune</option>
                </select>
              </div>
              <div className='mb-4'>
                <label className='fs-4'>Visit Date -</label>
                <input 
                  type='datetime-local' 
                  className='form-control'
                />
              </div>
              <div className='d-flex justify-content-evenly'>
                <button className='btn btn-success w-25'>Submit Data</button>
                <button className='btn btn-warning w-25'>Reset Data</button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Contact