import React from 'react'
import DashBoardImg from '../../public/DashboardImg.jpg'

function Banner() {
  return (
    <>
      <div className='max w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className=' w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
            <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>Hello everyone, Welcome to the my <span className='text-pink-500'>Book Store</span>.</h1>
                <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo saepe ab praesentium eum provident placeat itaque numquam veniam, neque voluptates rem, animi cumque qui iste doloribus vero suscipit reiciendis quas?</p>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" placeholder="Enter your email" required />
                </label>
            </div>
            <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className='w-full md:w-1/2'>
           <img src={DashBoardImg} className='order-1 md:order-2 w-120 h-120' alt="" />
        </div>
      </div>
    </>
  )
}

export default Banner
