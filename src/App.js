import React, {useState, useEffect} from "react";
import {Route, useLocation} from "react-router-dom"
import Home from "./page/Home.js"
import Nav from "./page/Nav.js"
function App (){

	const [data, setdata]= useState(
		{
			dataid:"",
			dataphoto:{}
		}
	);
	
	
	return(
	<>

	<Route path={["games/:id", "/"]}>
		<Home data={data} setdata={setdata} />
</Route>
	</>

	)
	};






 export default App

