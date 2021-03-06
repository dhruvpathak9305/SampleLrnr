import React,{useState, useEffect,useReducer} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
const notesReducer=(state,action)=>{
    switch(action.type){
        case 'POPULATE_NOTES':
            return action.notes
            case 'ADD_NOTE':
                return [...state,{title:action.title,body:action.body}]
                case 'REMOVE_NOTE':
                return state.filter((note)=>note.title!==action.title)
        default:
            return state
    }
}
const Notes=()=>{

// const [notes,setNotes]=useState([]);  
const [notes,dispatch]=useReducer(notesReducer,[])  
const [title,setTitle]=useState('');
const [body,setBody]=useState('')
const addNote=(e)=>{
e.preventDefault()
dispatch({
    type:'ADD_NOTE',
    title,
    body
})
    setTitle('');
    setBody('');
}
const removeNote=(title)=>{
    dispatch({
        type:'REMOVE_NOTE',
        title
    })
// setNotes(notes.filter((note)=>title!==note.title))
}
//Fetching Data from the Databases
useEffect(()=>{
    const notes=JSON.parse(localStorage.getItem('notes'))
    if(notes){
dispatch({type:'POPULATE_NOTES',notes})
        // setNotes(notesData)
    }
},[])

useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes))
},[notes])

return(
    <div>
        <h1>Notes</h1>
        {notes.map((note)=><Note key={note.title} note={note} removeNote={removeNote}/>
           )}
        <p>Add Note</p>
        <form onSubmit={addNote}>
        <input type="text" name="" id="" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e)=>setBody(e.target.value)}></textarea >
        <button>Add Notes</button>
        </form>
    </div>
)
}
const Note=({note,removeNote})=>{
    useEffect(()=>{
        console.log('Setting up effect!')
        {/* This return function gives the similar behaviour of ComponentDidUnMount */}
        return ()=>{
            console.log("Cleaning up Effect!")
        }
    },[])
    return(
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={()=>removeNote(note.title)}>x</button>
        </div>
    )
}

ReactDOM.render(<Notes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
