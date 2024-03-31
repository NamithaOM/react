import React from "react"
import './First.css'
import Testclass from "./Testclass"

function Welcome(){
    const sty ={
        textDecoration:"underline"
    }
return(
    <>
    <Testclass/>
       <p style={{color:'red',backgroundColor:"yellow"}}>Hello namitha</p>
    <p style={sty}>Hello namitha</p>  
    </>
   

)
}
export default Welcome