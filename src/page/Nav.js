import React, {useState} from 'react'
import styled from "styled-components"
import {useDispatch} from "react-redux"
import {fetchgames, fetchsearch} from "../action/actionGames.js"

const Nav = () => {
    const dispatch = useDispatch();
const [inputtext, setinputtext]= useState()

const searchinput =(e)=>{
    setinputtext(e.target.value)
}
const searchsubmit =(e)=>{
    e.preventDefault();
    console.log(inputtext);
   dispatch(fetchsearch(inputtext));
   setinputtext("")
}

    return (
        <nav>
            <form onSubmit={searchsubmit} >
            <input value={inputtext} onChange={searchinput} type="text" ></input>
            <button >CLICK</button>
            </form>
        </nav>
    )
}

export default Nav
