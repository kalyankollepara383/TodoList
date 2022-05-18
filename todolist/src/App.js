import './App.css';
import react,{useState} from 'react';

function App() {
  const[name,setName]=useState('Kalyan')
  const[todoitems,setTodoItems]=useState([
    {action:"Buy Items",done:false},
    {action:"Get Shoes",done:false},
    {action:"Collect Tickets",done:true},
    {action:"Call Joe",done:false},
  ])
  const [newItemText,setNewItemText]=useState('')
  const changeHandler=()=>{
    const username =name=="Kalyan" ? "Pavan" :"Kalyan"
    setName(username)
  }

  const newitemchangeHandler =(event)=>{
    setNewItemText(event.target.value)
  }

  const todoAdded=()=>{
    if(!todoitems.find(item=>item.action===newItemText)){
      setTodoItems((prevstate)=>{
        return [...prevstate,{action:newItemText,done:false}]
      })
    }
    setNewItemText("")
  }

  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
       {name} To Do List({todoitems.filter(t=>!t.done).length} items to do)
      </h4>
      <button className='btn btn-primary text-center text-white, br-2 ml-2' onClick={changeHandler}>Change</button>
      <div className='container-fluid'>
        <div className='my-1'>
         <input className='form-control' value={newItemText} onChange={newitemchangeHandler}/>
         <button className='btn btn-primary br-2 text-white text-center mt-2' onClick={todoAdded}>Add</button>

        </div>

      </div>
    </div>
  );
}

export default App;
