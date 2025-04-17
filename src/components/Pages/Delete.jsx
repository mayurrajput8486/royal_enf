import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom'

const Delete = () => {

    const [cust, setCust] = useState('')
    const {customerid} = useParams()
    const navigate = useNavigate()

    const getData = async () =>{
        const response = await axios.get(`http://localhost:8000/customer/${customerid}`)
        //console.log(response)
        const result = response.data
        //console.log(result)
        setCust(result)
    }
    useEffect(()=>{
        getData()
    }, [])

    const deleteRecord = () =>{
        axios.delete(`http://localhost:8000/customer/${customerid}`)
        alert('Data Deleted')
        navigate('/show')
    }
  return (
    <div>
        <div className='bg-dark w-50 mx-auto p-4 mt-5 mb-5 rounded-4 text-light'>
            <h2 className='text-center'>Delete Record For </h2>
            <div>
                <h3>Name - {cust.full_name}</h3>
                <h3>Email - {cust.email}</h3>
                <h3>Contact - {cust.contact}</h3>
            </div>
            <div className='text-center'>
                <button className='btn btn-danger me-3' onClick={deleteRecord}>YES</button>
                <NavLink to='/show'><button className='btn btn-success'>NO</button></NavLink>
            </div>
        </div>

    </div>
  )
}

export default Delete