import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const person=[
    {name:'Hafig',age:29},
    {name:'Mamun',age:39},
    {name:'Saket',age:10},
    {name:'Sumon',age:36},
    {name:'Hashi',age:39},
    {name:'Hemel',age:19}
  ]
  return (
    <div className='App'>
      <header className='App-header'>
      <Counter></Counter>
      <Users></Users>
      <br></br>
  {
    person.map(pd =><Frinds product={pd}></Frinds>)
  }
 </header>
    </div>
  );
}



function  Frinds(props) {
  const personStyle ={
    border:'5px solid black',
    backgroundColor:'lightgray',
    borderRadius:'5px',
    height:'250px',
    width:'250px',
    // float:'left',
    padding:'20px'

    
   
  }

 const {name,age}=props.product;
  return(
    <div style={personStyle}>
        <h3>Name:{name}</h3>
        <p>Age:{age}</p>
        <button>Now</button>
    </div>

  );
  
}
function  Counter() {
  const [count,setCount]=useState(10);
  //const handelIn= () =>setCount(count+1);
  //const handelDe= () =>setCount(count-1);

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick ={() =>setCount(count-1)}>decrese</button>
      <button onClick ={() =>setCount(count+1)}>increse</button>
    </div>
  )
  
}

function Users() {
  const [users ,setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h1>Users:{users.length}</h1>
      {
        console.log(users)
      }
      {
        users.map(user =><li>{user.company.name}</li>)
      }
    </div>
  )
  
}

export default App;
