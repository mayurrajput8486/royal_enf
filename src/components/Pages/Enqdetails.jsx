import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Enqdetails = () => {

    const [cust, setCust] = useState([])
    const getData = async () =>{
        try{
            const response = await axios.get("http://localhost:8000/customer")
            //console.log(response)
            const result = response.data
            //console.log(result)
            setCust(result)
        }catch(error){
            console.log('Error while fetching data', error.message)
        }
       
    }
    //to handle the side effect
    useEffect(()=>{
        getData()
    }, [])
  return (
    <div style={{height : '500px'}}>
        <h2 className='text-center'>Enquiry Details</h2>
        <table className='table table-dark mt-5'>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Cust Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Branch</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    cust.map((c,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{c.full_name}</td>
                                <td>{c.contact}</td>
                                <td>{c.email}</td>
                                <td>{c.address}</td>
                                <td>{c.branch}</td>
                                <td>{c.visit_date}</td>
                                <td>
                                    <NavLink to={`/update/${c.id}`}><button className='btn btn-success me-3'>Edit</button></NavLink>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Enqdetails