import React from 'react'

function Navbar({title}) {
  return (
    <div className='h-[60px] px-5 border-b-[1px] border-border-lines-light flex items-center justify-between'>
        <h1 className='font-bold tracking-tighter text-2xl text-dark-text/90 '>{title}</h1>
    </div>
  )
}

export default Navbar