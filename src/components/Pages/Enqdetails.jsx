import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    <div>
        <h2>Enquiry Details - </h2>
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