import axios from "axios"
import {popularGamesURL,newGamesURL, upcomingGamesURL, gamedataURL, searchedgameURL } from "../api/api.js"

export const fetchgames = ()=> async (dispatch)=>{
const populardata = await axios.get(popularGamesURL());
const upcomingdata = await axios.get(upcomingGamesURL());
const newgamedata = await axios.get(newGamesURL()); 



dispatch({
type:"FETCH_GAMES",
payload:{
   popular: populardata.data.results,
   upcoming: upcomingdata.data.results,
   newgame: newgamedata.data.results
}})}
export const gamesdetails = (id)=> async (dispatch)=>{
const gamesdatadetaisl = await axios.get(gamedataURL(id));

dispatch({
type: "GAME_DETAILS",
payload:{
   gamedetail: gamesdatadetaisl.data,

}


})


}

export const fetchsearch =(game_name)=> async(dispatch)=> {
   const searchgamedata = await axios.get(searchedgameURL(game_name))


dispatch({
   type: "FETCH_SEARCHED",
   payload:{
   searched: searchgamedata.data.results,
   }
   
   
   })
}