import React, { useEffect, useState } from "react";
import axios from '../../axios';
import { apikey, imageUrl } from "../../constants/contansts";
import './banner.css';

function Banner(){
    const [movie,setMovie]=useState();
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${apikey}&language=en-US`).then((res)=>{
            console.log(res.data.results[3])
            setMovie(res.data.results[7]);
        })
    },[])
    return(
        <div className="banner" 
        style={{backgroundImage:` url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="buttons">Play</button>
                    <button className="buttons">My list</button>
                </div>
                <h2>Watch now</h2>
                <p className="description">{movie ? movie.overview : ""}</p>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner;