import React from 'react'

export default function Modal() {

  const handleModalClose = (e,modalId)=>{
    e.preventDefault();
    document.getElementById(modalId).close();
  }
  return (
    <>
  
    <dialog id="product_add" className="modal">
    <div className="modal-box">
        <form action="">
          <div className='py-2'>
            <label>Tittle</label>
            <input type="text" name='title' className="w-full border border-blue-300 focus:outline-none py-2 px-4 rounded" placeholder="Tittle" />
          </div>
          <div className='py-2'>
            <label>details</label>
            
            <textarea name="details" id="" cols="5"  className="w-full border border-blue-300 focus:outline-none py-2 px-4 rounded"></textarea>
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
