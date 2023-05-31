import React from 'react'

const DashboardCard = (props) => {
  return (
    <div className='dashboardCard'>
        <div className='img'>
            <img src={props.img} alt={props.category.split(" ")[0]} />
        </div>
        <div className='row topRow'>
        <h2>{props.title}</h2>
        <p>${props.price}</p>
        </div>
        <div className='row bottomRow'>
            <p>{props.desc}</p>
            <a href={props.link}>View more</a>
        </div>
    </div>
  )
}

export default DashboardCard