const initialState = {
    popular: [],
    upcoming: [],
    newgame:[],
    searched:[]
}
const nextinitialState ={
    gamedetail:{}
}

export const GameReducer = (state=initialState, action)=>{
    switch(action.type){
            case "FETCH_GAMES":
                return {...state, 
                    popular:action.payload.popular,
                    upcoming: action.payload.upcoming,
                    newgame: action.payload.newgam
                }
            case "FETCH_SEARCHED":
                return{
                    ...state,
                    searched: action.payload.searched
                }
            default :
                return{...state}
    }}
export const Gamedetail =(state=nextinitialState , action)=>{
        switch(action.type){
            case "GAME_DETAILS":
                return{
                    ...state,
                    gamedetail:action.payload.gamedetail,
                }
                default :
                return{
                    ...state
                }
}}

