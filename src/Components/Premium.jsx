import React from 'react'

function Premium({ hidePremiumModal}) {
  return (
    <>
    {/* Premium Overlay */}
    <div onClick={hidePremiumModal} className="fixed top-0 left-0 w-full h-full bg-black/40 z-[60]">
    </div>
    <div className='fixed top-0 left-0 right-0 bottom-0 m-auto h-[90%] max-h-[570px] w-[90%] max-w-[890px] bg-white z-[60] rounded-2xl flex flex-col overflow-clip'>
    <div className='w-full h-auto flex-1 bg-sky-700 flex items-start justify-start'>
        <div className='w-[40%] h-full'></div>
        <div className='w-auto flex-1 h-full'></div>
    </div>
    <div className='w-full h-[70px] bg-sky-300'></div>
    </div>

    </>
  )
}

export default Premium