import React, {useState} from 'react';
import "./categories.scss"
import {useDispatch} from "react-redux";
import {getPopularVideos, getVideosByCategory} from "../../redux/actions/video.action";
const keywords =[
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algoritmh Art',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Crickent',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh'
]

const CategoriesBar = () =>{
    const [activeElement, setActiveElement] = useState('All');

    const dispatch = useDispatch();

    const handleClick = value =>{
        setActiveElement(value);
        if (value === 'All'){
            dispatch(getPopularVideos())
        }
        else {
            dispatch(getVideosByCategory(value))
        }


    }

    return(
        <div className="CategoriesBar">
            {
                keywords.map((value, i)=>
                <span 
                onClick={()=>handleClick(value)}
                 className={activeElement === value ? "active" : ""}  key={i}>
                    {value}
                </span>
                )
            }
        </div>
    )
}

export default CategoriesBar