import React, { useState,useEffect } from "react";
import './rowPost.css';
import axios from '../../axios';
import { imageUrl } from "../../constants/contansts";
function RowPost(props){
        const [poster,setPoster]=useState([]);
    useEffect(()=>{
        axios.get(props.url).then((res)=>{
            setPoster(res.data.results);
        })
    })
    return(
        <div className="row">
            <h1>{props.title}</h1>
            <div className="posters">
                {poster.map((obj,index)=>
                    <img key={index} className={props.isSmall ? 'smallPoster' : 'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path}`}/>
                )}
            </div>
        </div>
    )
}
export default RowPost;