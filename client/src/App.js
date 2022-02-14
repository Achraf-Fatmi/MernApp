import './App.css';
import { UserList } from './components/UserList';
import Home from "./components/Home"
import Edit from './components/Edit';
import {Routes, Route, Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import {toggleFalse} from "./JS/action/edit"
import { useDispatch } from 'react-redux';

function App() {
  const dispatch= useDispatch()
  return (
    <div className="App" > 
     <Link to="/Users">
      <Button style={{margin: 5}} >Users List</Button>
    </Link>
    <Link to ="/add">
      <Button onClick={()=>dispatch (toggleFalse())}>
          Add User
        </Button>    
    </Link>
  <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/users' element={<UserList/>}/>
    <Route path="/add" element={<Edit/>}/>
    <Route exact path="/edit/:id" element={<Edit/>}/>
  </Routes>

     
    </div>
  );
}

export default App;
