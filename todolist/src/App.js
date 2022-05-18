import './App.css';
import react,{useState} from 'react';

function App() {
  const[name,setName]=useState('Kalyan')
  const changeHandler=()=>{
    const username =name=="Kalyan" ? "Pavan" :"Kalyan"
    setName(username)
  }
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
       {name} To Do List
      </h4>
      <button className='btn btn-primary text-center text-white, br-2 ml-2' onClick={changeHandler}>Change</button>
    </div>
  );
}

export default App;
