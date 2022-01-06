import React , {useState} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import Post from './Post'
import './styles/Home.css'


function Home({APOD}) {

  const getMediaType = () => APOD.media_type
  
  return (
    <div className="Home">
      <div className='post'>
        <div className='APOD-title'>{APOD.title}</div>
        {getMediaType() == "image" ?
        <img className='APOD-pic' src={APOD.url} alt={APOD.title} /> : getMediaType() == "video" &&
        <ReactPlayer url={APOD.url} /> 
        }
        <div className='APOD-description'>{APOD.explanation}</div>  
        </div>
    </div>
  )
}

export default Home