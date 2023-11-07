import React from 'react'

export default function Items({Items}) {
    console.log(Items);
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{Items?.Title}</h2>
                 <p>{Items?.details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </>
  )
}
