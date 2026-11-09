import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full text-xl font-semibold h-10 w-10 flex items-center justify-center'>{props.id+1}</h2>
        <div >
          <p className='text-sm font-medium leading-relaxed text-white text-shadow-2xs mb-10 '>{props.intro}</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className= 'text-white font-medium h-9 w-32 px-4 rounded-full'>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium h-9 w-9 px-2 py-1 rounded-full'><i className="ri-arrow-right-fill"></i></button>
          </div>
        </div>
      </div>

  )
}

export default RightCardContent