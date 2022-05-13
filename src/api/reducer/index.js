import {combineReducers} from "redux"
import {GameReducer,Gamedetail } from "./GameReducer"

 const Rootreducer = combineReducers({
    game: GameReducer,
    gamedetail:Gamedetail

});
export default Rootreducer