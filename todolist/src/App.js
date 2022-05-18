import './App.css';
import react,{useState} from 'react';
import Visibility from './Visibility';
import Completedtodo from './Completedtodo';

function App() {
  const[name,setName]=useState('Kalyan')
  const[todoitems,setTodoItems]=useState([
    {action:"Buy Items",done:false},
    {action:"Get Shoes",done:false},
    {action:"Collect Tickets",done:true},
    {action:"Call Joe",done:false},
  ])
  const[showCompleted,setShowCompleted]=useState(true)
  const [newItemText,setNewItemText]=useState('')
  const[filteredItems,setFilteredItems]=useState([])

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


  const toggle=(item)=>{
    setTodoItems(todoitems.map(i=>i.action===item.action ? {...i,done:!i.done} : i))
  }

const Handler=()=>{
  setShowCompleted((prevstate)=>{
    return !prevstate
  })
  const itemsfiltered=todoitems.filter((items)=>items.done)
  setFilteredItems(itemsfiltered)
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
      <table className='table table-striped table-bordered'>
        <thead>
          <tr><th>Description</th><th>Done</th></tr>
        </thead>
        <tbody>{
          todoitems.map(item=><tr key={item.action}>
            <td>{item.action}</td>
            <td><input type="checkbox" checked={item.done} onChange={()=>{toggle(item)}}></input></td>
          </tr>
          )
          }</tbody>
      </table>

      <div className='bg-secondary text-white text-center p-2 mt-5 mb-5'>
        <Visibility description="Completed Tasks" ischecked={showCompleted} callback={Handler} 
        
        />
      </div>


      {!showCompleted && <Completedtodo items={filteredItems}/>}




      
    </div>
  );
}

export default App;
