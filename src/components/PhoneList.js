import React from 'react'
import { List, Header, Segment } from 'semantic-ui-react'

const PhoneList = (props) => {
  // TODO: Change serializer on backend to deliver phone array with associated
  // orgs/offices rather than as 3 separate arrays so that Org/Office info can
  // be displayed for each number
  const phones = props.phones.map(phone => {
    return (
      <List.Item>
        <List.Icon name='phone' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header><a href={`tel:${phone.digits}`}>{phone.digits}</a></List.Header>
        </List.Content>
      </List.Item>

  )})
  return (


    <List>
        <Header as="h3">Call One of these Numbers:</Header>
        {phones}
    </List>

  )
}

export default PhoneList
