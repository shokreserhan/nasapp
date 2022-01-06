import React  from 'react';
import ReactPlayer from 'react-player'
import './styles/Home.css'
import {MdFavoriteBorder} from 'react-icons/md';
import axios from 'axios'

function FavoritePost({APOD , removeFavoriteFromDB}) {
    const SERVER_URL = "http://localhost:3001/";

    const getMediaType = () => APOD.media_type

    const handleRemoveFavoriteFromDB = () =>{
      removeFavoriteFromDB(APOD._id)
    }

    return (
        <div className='post'>
            <div className='APOD-title'>{APOD.title}</div>
            <div className='APOD-MEDIA'>
                {getMediaType() == "image" ?
                <img className='APOD-pic' src={APOD.URL} alt={APOD.title} /> : getMediaType() == "video" &&
                <ReactPlayer url={APOD.URL} /> 
                }
            </div>
                <MdFavoriteBorder onClick={handleRemoveFavoriteFromDB}/>
        </div>
    )
  }
  
  export default FavoritePost