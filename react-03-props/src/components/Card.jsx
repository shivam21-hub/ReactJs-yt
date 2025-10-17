import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, maiores.</p>
        <button>View</button>
      </div>
    </div>
  )
}

export default Card