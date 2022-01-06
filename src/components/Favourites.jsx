import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios';
import ReactPlayer from 'react-player';
import FavoritePost from './FavoritePost';
function Favourites() {

  const SERVER_URL = "http://localhost:3001/";

  const [favoriteData, setfavoriteData] = useState([])

  useEffect( () => {
    axios.get(`http://localhost:3001/favorite`)
    .then(function (response) {
      console.log(response.data);
      setfavoriteData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
},[])

const removeFavoriteFromDB = () => {

}
console.log(favoriteData)
  return (
    <div className="Favourites">
      {favoriteData.map(post => {
        return (<FavoritePost APOD={post} />)
      })}
    </div>
  )
}

export default Favourites