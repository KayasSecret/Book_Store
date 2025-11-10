import React from 'react'

function Card({ item }) {
    console.log(item)
  return (
    <>
        <div>
           <div className="card bg-base-100 w-full max-w-sm shadow-sm mx-auto">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item?.name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{item?.title}</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
