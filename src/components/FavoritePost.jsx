import React  from 'react';
import ReactPlayer from 'react-player'
import './styles/Home.css'
import {MdFavoriteBorder} from 'react-icons/md';
import axios from 'axios'

function FavoritePost({APOD}) {
    const SERVER_URL = "http://localhost:3001/";

    const getMediaType = () => APOD.media_type

    const removeFavoriteFromDB = () =>{
        axios.delete(`${SERVER_URL}favorite`, {
           id:APOD._id
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className='post'>
            <div className='APOD-title'>{APOD.title}</div>
            <div className='APOD-MEDIA'>
                {getMediaType() == "image" ?
                <img className='APOD-pic' src={APOD.URL} alt={APOD.title} /> : getMediaType() == "video" &&
                <ReactPlayer url={APOD.URL} /> 
                }
                <MdFavoriteBorder onClick={removeFavoriteFromDB}/>
            </div>
        </div>
    )
  }
  
  export default FavoritePost