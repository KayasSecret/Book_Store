import React from 'react'

function Card({ item }) {
  return (
    <>
      {/* Outer wrapper ki margins hata di */}
      <div className="w-full">
        
        {/* Yeh main card hai*/}
        <div className="card bg-base-100 shadow-xl w-full hover:scale-105 transition-all duration-500 ease-out">
          
          <figure>
            <img
              src={item.image}
              alt="Book"
              className="w-full max-h-72 object-contain"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>

            <p>{item?.title}</p>

            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>

              <button className="px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
                Buy now
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card
