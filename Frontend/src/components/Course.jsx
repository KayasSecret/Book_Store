import React from 'react'
import Card from './Card'
import list from '../../public/list.json';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

        {/*Page Content*/}
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We are delighted to have you <span className='text-pink-500'>Here..!</span>
          </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam non quos temporibus molestias suscipit corporis! Ipsum vero perferendis quisquam iure velit quidem, vel possimus, quod error ducimus omnis quasi sit hic. Vero eos magni perspiciatis, aliquam ipsam ullam deleniti consequatur quasi, dicta explicabo animi iure! Qui itaque alias laboriosam nulla aut ab atque architecto saepe ipsam sapiente! Sequi, velit.
          </p>
          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>Back</button>
          </Link>
        </div>

        {/*Cards*/}
        <div className='mt-12 p-4 grid grid-cols-1 md:grid-cols-4 gap-6'>
          {
            list.map((item) => (
              <Card key={item.id} item={item}/>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Course
