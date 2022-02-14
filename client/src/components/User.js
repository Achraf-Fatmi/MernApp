import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteUser, getUser } from '../JS/action/user'
import {useDispatch} from "react-redux"
import { toggleTrue } from '../JS/action/edit'
import { Link } from 'react-router-dom'
 
const User = ({user}) => {
  const dispatch= useDispatch()
  return (
    <Card key={user._id}>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://rekrutmen.unisba.ac.id/assets/images/user.png'
        />
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>{user.email}</Card.Meta>
        <Card.Description>
          Phone Number:  <strong>{user.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to= {`/edit/${user._id}`} >
          <Button basic color='green' onClick={()=>{dispatch(toggleTrue()); dispatch(getUser(user._id))}}>
            Edit
          </Button>
          </Link>
          <Button basic color='red' onClick={()=>dispatch(deleteUser(user._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )}
    



export default User