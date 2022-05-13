import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import  {gamesdetails} from "../action/actionGames.js"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
const Gamescollection = ({name, image, id, released, photo, data, setdata}) => {
    const string = id.toString();
  const entryhandler =()=>{
      document.body.style.overflow="hidden";
  }

    return (
        <GamesStyled layoutId={string} onClick={()=>setdata({
            ...data,
            dataphoto: photo
        })}>
            <div onClick={entryhandler}>
            <Link to={`games/${id}`}>
            <motion.h3 >{name}</motion.h3>
            <p>{released}</p>
            <img  src={image} alt={name} />
            </Link>
            </div>
        </GamesStyled>
    )
}

const GamesStyled = styled(motion.div)`
min-height:30vh;
box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
overflow:hidden;
border-radius:1rem;
img{
    height:60vh;
    object-fit: cover;
    display:block;
    width:100%;
}
div{
text-align:center;
}



`


export default Gamescollection
