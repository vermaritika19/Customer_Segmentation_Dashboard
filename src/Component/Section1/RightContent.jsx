import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {  
    console.log(props.users);
  return ( 
    <div id='right' className='h-full w-2/3 p-4 overflow-x-auto rounded-4xl flex flex-nowrap gap-1 '>
      {props.users.map(function(elem,idx){

        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} intro={elem.intro} series={elem.series}/>
      })}
    </div>
  )
}

export default RightContent
