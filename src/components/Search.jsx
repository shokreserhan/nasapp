import React,{useState , useEffect} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios'
import Post from './Post';


function Search() {

  const [searchValue, setsearchValue] = useState('')
  const [searchData, setsearchData] = useState([])

  useEffect( () => { 
    searchValue.replace(/ /g,'').length &&
      axios.get(`https://images-api.nasa.gov/search?q=${searchValue}`).then((res) => {
        setsearchData(res.data.collection.items)
      })
},[searchValue])

  const handleSearch = e => {setsearchValue(e.target.value)}


  return (
    <div className="Search">
      <input onChange = {handleSearch} value={searchValue} placeholder='Search...'/>
      {searchData.map((data,index) => 
      <div key={index} className='post-container'>
        <Post APOD={data} />
      </div>)}
    </div>
  )
}

export default Search