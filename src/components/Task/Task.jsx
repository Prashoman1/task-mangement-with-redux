import React from 'react'
import Items from '../Items/Items'

export default function () {
    const itemValues={
        Title : 'Title',
        details : 'If a dog chews shoes whose shoes does he choose?',
        status : 'pending'
    }
  return (
    <>
        <div className='w-full h-auto flex gap-3 py-5 px-6'>

            <div className='w-[30%] h-auto'>
                <h3 className='text-orange-300 underline text-2xl text-center'>My Task</h3>
                <div className='flex flex-col gap-4 py-3'>
                    
                    <Items Items={itemValues}></Items>
                    <Items Items={itemValues}></Items>
                    <Items Items={itemValues}></Items>
                    
                </div>
            </div>
            <div className='w-[30%] h-auto'>
                <h3 className='text-primary underline text-2xl text-center'>Progress Task</h3>
                <div className='flex flex-col gap-4 py-3'>
                    
                    
                    
                </div>
            </div>
            <div className='w-[30%] h-auto'>
                <h3 className='text-success underline text-2xl text-center'>Complate Task</h3>
                <div className='flex flex-col gap-4 py-3'>
                    
                   
                    
                </div>
            </div>
        </div>
    </>
  )
}
