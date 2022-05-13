
const base_url = "https://api.rawg.io/api/";
const api ="a389533f56394eb38c3eb617056e7604";

const getcurrentMonth = () =>{
const  month = new Date().getMonth() + 1;
if(month < 10){
    return `${0}${month}`
}else{
    return month
}

}
const getcurrentDay = () =>{
    const  Day = new Date().getDate();
    if(Day < 10){
        return `${0}${Day}`
    }else{
        return Day
    }
    
    }


const Datee = new Date().getFullYear();

const currentDate = `${Datee}-${getcurrentMonth()}-${getcurrentDay()}`
const nextYear = `${Datee+1}-${getcurrentMonth()}-${getcurrentDay()}`
const lastYear = `${Datee-1}-${getcurrentMonth()}-${getcurrentDay()}`

const popular_games = `games?key=${api}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=30`
const upcoming_games = `games?key=${api}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?key=${api}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

 export const popularGamesURL =()=> `${base_url}${popular_games}` ; 
 export const newGamesURL =()=> `${base_url}${new_games}` ; 
 export const upcomingGamesURL =()=> `${base_url}${upcoming_games}` ; 
 export const gamedataURL = (id)=> `${base_url}games?key=${api}/${id}`
export const searchedgameURL = (game_name) => `${base_url}games?key=${api}?search=${game_name}&page_size=6`