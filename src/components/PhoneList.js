import React from 'react'

const PhoneList = (props) => {
  console.log(phones)
  const phones = props.phones.map(phone => {
    return <p><a href={`tel:${phone.digits}`}>{phone.digits}</a></p>
  })
  return (
    <div>
    <h3>Call One of these Numbers:</h3>
      {phones}
    </div>
  )
}

export default PhoneList
