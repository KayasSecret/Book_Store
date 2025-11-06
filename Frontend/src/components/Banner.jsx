import React from 'react'

function Banner() {
  return (
    <>
      <div className='max w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32'>
            <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>Hello everyone, Welcome to the my <span className='text-pink-500'>Book Store</span>.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo saepe ab praesentium eum provident placeat itaque numquam veniam, neque voluptates rem, animi cumque qui iste doloribus vero suscipit reiciendis quas?</p>
            </div>
        </div>
        <div className='w-full md:w-1/2'>Right</div>
      </div>
    </>
  )
}

export default Banner
