import React from 'react'
import { Link } from 'react-router-dom'

const Days = props => {

  const renderDays = props.days.map(day => <Link key={day.id} to={`/days/${day.id}`} className='menu-item'>{day.date}</Link>
  );

  return (
    <div>
      {renderDays}
    </div>    
  )
}

export default Days