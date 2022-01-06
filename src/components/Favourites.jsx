import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios';
import ReactPlayer from 'react-player';
import FavoritePost from './FavoritePost';
function Favourites() {

  const SERVER_URL = "http://localhost:3001/";

  const [favoriteData, setfavoriteData] = useState([])

  const getFavoriteData = () => {
    axios.get(`http://localhost:3001/favorite`)
    .then(function (response) {
      setfavoriteData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
  }

  useEffect( () => {
    getFavoriteData()
},[favoriteData])

const removeFavoriteFromDB = (postId) => {
  axios.delete(`http://localhost:3001/favorite`,{
    data: { _id: postId }})
    .then(function (response) {
      getFavoriteData()
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
}
  return (
    <div className="Favourites">
      {favoriteData.map(post => {
        return (<FavoritePost key={post._id} removeFavoriteFromDB={removeFavoriteFromDB} APOD={post} />)
      })}
    </div>
  )
}

export default Favourites