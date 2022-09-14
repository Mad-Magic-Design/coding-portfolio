import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

import Project from './Project';
import { GinTrackerData, NeoTodayData, LocalSceneData,HighHorseData,IntrospectionData } from '../utils/ProjectInfo';
import GinMenu from '../imgs/GinTrackerImg.png'
import NeoTodayImg from '../imgs/NeoTodayImg.png'
import IntrospectionImg from '../imgs/IntrospectionImg.png'
import LocalSceneImg from '../imgs/LocalSceneImg.png'
import HighHorseImg from '../imgs/HighHorseImg.png'

export default function Portfolio(){

    const [project, SetProject] = useState({
        data: GinTrackerData,
        image: GinMenu,
    })

    const handleProjectSelect = (data,image) =>{
        SetProject ({
            data: data,
            image: image,
        })
    }

    return (
        <div className="container portfolio-wrapper">
            <div className="portfolio-header row">             
                <button className="btn" onClick={()=>handleProjectSelect(GinTrackerData,GinMenu)}>Gin Score Tracker</button>
                <button className="btn" onClick={()=>handleProjectSelect(NeoTodayData,NeoTodayImg)}>Neo Today</button>
                <button className="btn" onClick={()=>handleProjectSelect(LocalSceneData,LocalSceneImg)}>Local Scene</button>  
                <button className="btn" onClick={()=>handleProjectSelect(HighHorseData,HighHorseImg)}>High Horse</button>        
                <button className="btn" onClick={()=>handleProjectSelect(IntrospectionData,IntrospectionImg)}>Introspection</button>
               
            </div>
            <Project data={project.data} image={project.image}/>
        </div>
    );
}