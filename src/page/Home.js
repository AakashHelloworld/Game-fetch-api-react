import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchgames} from "../action/actionGames.js"
import Gamescollection from './Gamescollection.js'
import styled from "styled-components"
import {useLocation} from "react-router-dom"
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion"
import Gamedetail from './Gamedetail.js'
import Nav from "./Nav.js"
const Home = ({data, setdata}) => {
    const location = useLocation();
	const pathId = location.pathname.split("/")[2];
        const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchgames());
    
    
    
    },[dispatch])
    const {popular, upcoming, searched} = useSelector((state)=> state.game)
console.log(data.name)
    return (
        <>
        <Gamelist>
            <AnimateSharedLayout type="switch">
            < AnimatePresence>
            {(data.name && pathId ) &&
         <Gamedetail pathId={pathId} data={data} setdata={setdata}/>
            }
            </ AnimatePresence>
            <h1>UPCOMING</h1>
            <Game>
            {
                upcoming.map((data)=>(
                    < Gamescollection data={data} setdata={setdata} photo={data.short_screenshots} name={data.name} released={data.released} id={data.id} key={data.id} image={data.background_image}/>
                ))
            }
           </Game>
           
</AnimateSharedLayout>
        </Gamelist>
        </>
    )
}
const Gamelist = styled(motion.div)`
padding: 0rem 2rem;
h1{
    padding; 2rem 0rem;
}
`
const Game = styled(motion.div)`
min-height:80vh;
display:grid;
grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
grid-column-gap:3rem;
grid-row-gap:5rem;

`




export default Home
