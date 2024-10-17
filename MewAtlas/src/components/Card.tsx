import React from 'react'

const Card = (props: any) => {
  return (
    <div className='cardContainer'>
        <div className='card'>
            <img src={props.picture}/>
            <div className='cardInfo'>
                <span className='title'>{props.name}</span>
                <span className='grey'>{props.color}</span>
                <span>{props.age}</span>
            </div>
        </div>
    </div>
  )
}

export default Card
