import React from 'react'
import './styles/Intro.css'
import Button from './frags/Button'

const Home = () => {
  return (
    <div className="!pt-10 w-full grid justify-center items-center">
      <div className='!p-3 max-md:!p-15 max-md:!pb-0 max-md:!pt-0'>

        <main className='justify-self-center !pb-10 !pt-0 max-w-7xl text-lg/20 max-md:text-lg/15'>
          <h1 className='font-code font-semibold text-4xl max-lg:text-2xl max-md:text-sm !pb-5 '>Namaste(); I am</h1>
          <h1 className='big-text name text-7xl font-bold font-hawk text-transparent bg-clip-text inline'>Shubham.</h1>
          <h1 className='big-text text-7xl font-bold font-hawk'>Creativity & Code!</h1>
          <h1 className='text-xl max-lg:text-lg max-md:text-sm  text-gray-300 !pt-10'>Creative Front-End Developer currently building projects and learning Back-End.</h1>
        </main>
        <Button link="https://linkedin.com/in/shubham-singh404" btn="Let's Connect" />
      </div>
    </div>
  )
}

export default Home