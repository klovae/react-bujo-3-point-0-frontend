import React from 'react'


const Day = props => {
  const dateStr = props.day.date
  const dateMinusZone = dateStr.slice(0, dateStr.length - 1)
  const easyDate = new Date(dateMinusZone);
  return (
    <React.Fragment>
      {easyDate.toDateString()}
    </React.Fragment>    
  )
}

export default Day