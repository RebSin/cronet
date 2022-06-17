import './App.css';
import { useState } from "react";
import Axios from 'axios'

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [steps, setSteps] = useState('');
  const [patternList, setPatternList] = useState([]);
  const[newName, setNewName] = useState('');

  const addPattern = () => {
    Axios.post('http://localhost:3000/', {
      name: name, 
      description: description, 
      steps: steps
    }).then(() => {
      setPatternList([
        ...patternList,
        {
          name: name,
          description: description,
          steps: steps
        }
      ])
    })
  }
  const getPatterns = () => {
    Axios.get('http://localhost:3000/').then((response) => {
      setPatternList(response.data)
    })
  }

  const updatePatternName = (id) => {
    Axios.put('http://localhost:3000/', {
      name: newName,
      id: id
    }).then((response) => {
      setPatternList(patternList.map((val) => {
        return val.id = id ? {id: val.id, name: newName, description: val.description, steps: val.steps} : val
      }))
    })
  }

  const deletePattern = (id) => {
    Axios.delete(`http://localhost:3000/${id}`).then((response) => {
      setPatternList(patternList.filter((val)=> {
        return val.id !== id;
      }))
    })
  }

  return (
    <div className="App">
      <div className="patternForm">
      <label> Name </label>
      <input type="text" onChange= {(event) => 
        {
          setName(event.target.value)
        }}
      />
      <label> Description </label>
      <input type="text" onChange= {(event) => 
        {
          setDescription(event.target.value)
        }}
      />
      <label> Steps </label>
      <input type="text" onChange= {(event) => 
        {
          setSteps(event.target.value)
        }}
      />
      <button onClick={addPattern}> Submit </button>
      </div>
      <div className ="patterns">
        <button onClick={getPatterns}> Show Patterns </button>
        {patternList.map((val, key) => {
          return <div className="pattern">
          <div> 
            <h3>Name: {val.name} </h3>
            <h3>Description: {val.description} </h3>
            <h3>Steps: {val.steps} </h3>
            </div>
          <div> 
            {" "} 
            <input type="text"onChange= {(event) => 
            {
              setNewName(event.target.value)
            }}
            />
            <button onClick={()=> {updatePatternName(val.id)}}> Update </button>
            <button onClick={()=> {deletePattern(val.id)}}> Delete </button>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
