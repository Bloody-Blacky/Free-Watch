import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'

const VideoPlayer = () => {

let {id} = useParams();


let [Data,SetData] = useState();
const getSingleMovie = async(id)=>{
    
    let getdata = await axios.get(`https://65d0dfe7ab7beba3d5e3d412.mockapi.io/moives/application/${id}`)
SetData(getdata.data)
    

}

useEffect(()=>{
    if(id){
    getSingleMovie(id)}
},[id])



  return (
    <div>
        {
        Data?<>
        <div className='player-wrapper'>
        <ReactPlayer url={Data.video} playing={true} light={Data.banner}
        className='react-player'
        />
        
        
        </div>
        </>: <div className='text-white'>Loading</div>
           }
        </div>
     
  )
}

export default VideoPlayer