import './App.css';
import AllAuthors from '../AllAuthors/AllAuthors';
import NewAuthor from '../../pages/NewAuthor'
import EditAuthor from '../../pages/EditAuthor'
import {Routes, Route, Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
function App() {
  const URL = "http://localhost:8000/api";
  const [authors, setAuthors] = useState([]);

  useEffect( () => {

    const apiCall = async () => {
      await axios.get(URL+'/authors')
        .then(res => setAuthors(res.data))
        .catch(err => console.log(err));
    }
    apiCall()
  }, [])

  const newAuthor = (author) => {
    if (authors.length < 1) {
      return setAuthors([author]);
    }
    let newList = [...authors, author];
    const listSorted = newList.sort((a, b) => a.name.localeCompare(b.name));
    setAuthors(listSorted);
    
  }
  const editAuthor = (author) => {
    let index = authors.findIndex((auth) => auth._id === author._id);
    let updatedList = [...authors];
    updatedList[index].name = author.name;
    setAuthors(updatedList);
  }

  const deteleAuthor = (_id) => {
    let index = authors.findIndex((auth) => auth._id === _id);
    let updatedList = [...authors];
    updatedList.splice(index,1)
    setAuthors(updatedList);
  }
  return (
    <div className="App">
      <nav style={{display: "flex", gap: "12px", justifyContent: "center"}}>
        <Link to='/'>
          <Button variant="contained" color="info" >Author List</Button>
        </Link>
        <Link to='/new'>
          <Button variant="contained" color="success" >Add Author</Button>
        </Link>
      </nav>

      
      <Routes>
        <Route path='/' element={<AllAuthors authors={authors} deteleAuthor={deteleAuthor}/>}/>
        <Route path='/new' element={<NewAuthor newAuthor={newAuthor}/>}/>
        <Route path='/edit/:_id' element={<EditAuthor authors={authors} editAuthor={editAuthor}/>}/>
      </Routes>
    </div>
  );
}

export default App;
