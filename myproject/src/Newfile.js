import React, { useEffect, useState } from "react";
function Newfiles(){
    const [data,setData]= useState('')
    useEffect(()=>{
fetch('http://localhost:5000/').then((res)=>res.json()).then((result)=>{
    console.log(result);
    setData(result)
})
    },[])
    return(
    <>
    <p>{data}</p>
    </>    
    )
}
export default Newfiles
