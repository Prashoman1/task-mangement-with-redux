import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Modal() {

  const [valueStore,setValueStore] = useState({
    title:'',
    details:'',
  })

  const dispatch = useDispatch()

  const handleModalClose = (e,modalId)=>{
    e.preventDefault();
    document.getElementById(modalId).close();
  }

  const handleChange = (e)=>{
    setValueStore({
      ...valueStore,
      [e.target.name]:e.target.value
    });
  }

  const handleTaskSubmit = (e)=>{
    e.preventDefault();
    console.log(valueStore);
    const taskInfo ={
      title:valueStore.title,
      details:valueStore.details,
    }
    dispatch({type:'taskInsrted',payload:taskInfo})

  }

  return (
    <>
  
    <dialog id="product_add" className="modal">
    <div className="modal-box">
        <form action="" onSubmit={handleTaskSubmit}>
          <div className='py-2'>
            <label>Tittle</label>
            <input type="text" name='title' className="w-full border border-blue-300 focus:outline-none py-2 px-4 rounded" placeholder="Tittle" value={valueStore.title} onChange={handleChange} />
          </div>
          <div className='py-2'>
            <label>details</label>
            
            <textarea name="details" id="" cols="5"  className="w-full border border-blue-300 focus:outline-none py-2 px-4 rounded" value={valueStore.details} onChange={handleChange}></textarea>
          </div>
          <div className='flex items-center justify-end'>
            <button onClick={(e)=>handleModalClose(e,'product_add')} className='btn btn-sm btn-danger'>close</button>
            <button className='btn btn-sm btn-success ms-3'>submit</button>
          </div>
        </form>
    </div>
    </dialog>
    </>
  )
}
