import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  console.log(props.color);
  return (
    <div className='h-full w-60 shrink-0 rounded-4xl overflow-hidden relative bg-blue-200'>

      <img className='h-full w-full object-cover' src={props.img} alt="image1 working profession" />
      <RightCardContent id={props.id}  color={props.color} tag={props.tag} intro={props.intro} series={props.series}/>    //image ke ander ke content ke liye

    </div>
  )
}

export default RightCard