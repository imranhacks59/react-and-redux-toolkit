import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 z-999 w-full border-b-1 bg-white shadow-sm'>
      <div className='flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11'>
      {/* <input
       type='text'
       placeholder='search...'
      /> */}
      <div></div>

      <div className='flex flex-row gap-4'>
        <ul>
        Notification
        </ul>
        user
      </div>
      

      </div>
    </header>
  )
}

export default Header