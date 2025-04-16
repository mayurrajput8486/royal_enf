import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
const Update = () => {
    const {register, handleSubmit, setValue} = useForm()
    const {customerid} = useParams()
    const navigate = useNavigate()

    const getData = async() =>{
        const response = await axios.get(`http://localhost:8000/customer/${customerid}`)
        setValue("full_name", response.data.full_name)
        setValue("email",response.data.email)
        setValue("contact", response.data.contact)
        setValue("address", response.data.address)
        setValue("branch", response.data.branch)
        setValue("visit_date", response.data.visit_date)
    }
    useEffect(()=>{
        getData()
    }, [])

    const updateData = (data) =>{
        axios.put(`http://localhost:8000/customer/${customerid}`,data)
        alert('Data Updated !!!')
        navigate('/show')
    }

    return (
            <div className='pb-5' style={{ background: 'linear-gradient(90deg,rgba(164, 94, 214, 1) 45%, rgba(217, 160, 160, 1) 100%, rgba(179, 111, 29, 1) 3%)' }}>
                <h1 className='text-center'>Update Customer Details</h1>
                <div className='w-50 bg-dark p-4 text-light fw-bold rounded-3 mx-auto mt-5'>
                    <form onSubmit={handleSubmit(updateData)}>
                        <div className='mb-2'>
                            <label className='fs-4'>Customer Full Name -</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Full Name'
                                {...register('full_name')}
                            />
                        </div>
                        <div className='mb-2'>
                            <label className='fs-4'>Customer Email -</label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Enter email'
                                {...register('email')}
                            />
                        </div>
                        <div className='mb-2'>
                            <label className='fs-4'>Customer Contact -</label>
                            <input
                                type='tel'
                                className='form-control'
                                placeholder='Enter Contact'
                                {...register('contact')}
                            />
                        </div>
                        <div className='mb-2'>
                            <label className='fs-4'>Customer Address -</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Address'
                                {...register('address')}
                            />
                        </div>
                        <div className='mb-2'>
                            <label className='fs-4'>Branch Location</label>
                            <select className='form-control' {...register('branch')}>
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
                                type='date'
                                className='form-control'
                                {...register('visit_date')}
                            />
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <button className='btn btn-success w-25' type='submit'>Update Data</button>
                            <button className='btn btn-warning w-25' type='reset'>Reset Data</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Update