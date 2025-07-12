import React from 'react'

export function PreLoader() {
  return (
    <div>
        <h1 className='counter fixed w-full h-full flex justify-center items-center'>0</h1>

        <div className='overlay fixed w-screen h-screen z-[2] flex'>
            <div className='bar w-[10vw] h-[105vh] bg-amber-400'></div>
            <div className='bar w-[10vw] h-[105vh] bg-amber-400'></div>
            <div className='bar w-[10vw] h-[105vh] bg-amber-400'></div>
            <div className='bar w-[10vw] h-[105vh] bg-amber-400'></div>
            <div className='bar w-[10vw] h-[105vh] bg-amber-400'></div>
            <div className='bar w-[10vw] h-[105vh] bg-amber-400'></div>
            <div className='bar w-[10vw] h-[105vh] bg-amber-400'></div>
            <div className='bar w-[10vw] h-[105vh] bg-amber-400'></div>
            <div className='bar w-[10vw] h-[105vh] bg-amber-400'></div>
            <div className='bar w-[10vw] h-[105vh] bg-amber-400'></div>
        </div>
    </div>
  )
}
