import React from 'react'
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import {motion} from "framer-motion"
const Gamedetail = ({data, setdata, pathId}) => {
    const history = useHistory();
    const photodata= data.short_screenshots
    const platform = data.platforms
    console.log(photodata);
    const exithandler =(e) =>{
        const element=e.target;
        if(element.classList.contains("screen")){
          document.body.style.overflow="auto"
            history.push("/");


        }

    }
    return (
       
        <Container className="screen" onClick={exithandler}>
            <SmallContainer layoutId={pathId}> 
            <motion.h1 >{data.name}</motion.h1>
         <Small>
             <div>
            { data.name && (
                <>
              
               <h3>{`Rating:${data.rating}`}</h3>
              </>
            )}
            </div>
            <Smallsmall>
            {
            platform.map((data)=>(
                <h3 key={data.platform.id}>{data.platform.name}</h3>
            ))
            }
            </Smallsmall>
            </Small>
            { data.name &&
        photodata.map((img)=>(
<img key={img.id} src={img.image} />
        ))
    }
    </SmallContainer>
        </Container>
    )
}
const Container= styled(motion.div)`
height:100vh;
background: rgba(0,0,0, 0.5);
width:100%;
display:flex;
justify-content:center;
position: fixed;
top:0;
left:0;
h1{
    text-align:center;
}
z-index: 2;
`
const SmallContainer = styled(motion.div)`
width: 80%;
padding:2rem;
background:white;
overflow-y: scroll;
margin: 2rem 0rem 0rem 0rem;
border-radius: 1rem;
img{
width:100%;
display:block;

}


`
const Small = styled(motion.div)`
display:flex;
justify-content:space-between;

`
const Smallsmall = styled(motion.div)`
display:flex;
justify-content:space-between;

`



export default Gamedetail
