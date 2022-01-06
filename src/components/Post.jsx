import React  from 'react';
import ReactPlayer from 'react-player'
import './styles/Home.css'
import {MdFavorite} from 'react-icons/md';
import axios from 'axios'
function Post({APOD}) {
    const SERVER_URL = "http://localhost:3001/";

    const getMediaType = () => APOD.data[0].media_type

    const saveFavoriteToDB = () =>{
        axios.post(`${SERVER_URL}favorite`, {
            title: APOD.data[0].title,
            URL: APOD.links[0].href,
            media_type: APOD.data[0].media_type
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
            <div className='APOD-title'>{APOD.data[0].title}</div>
            {getMediaType() == "image" ?
            <img className='APOD-pic' src={APOD.links[0].href} alt={APOD.data[0].title} /> : getMediaType() == "video" &&
            <ReactPlayer url={APOD.links[0].href} /> 
            }
            <div className='saveIcon'><MdFavorite onClick={saveFavoriteToDB}/></div>
        </div>
    )
  }
  
  export default Post