import React, { useEffect, useState } from "react";

// function Effecthook() {
//     const [num, setNum] = useState(0)

//     const stTed = () => {
//         setNum(num + 1)
       
//     }

//     useEffect(() => {
//         console.log("mounting");
//     }, [num])

//     return (
//         <p onClick={stTed}>useEffect :{num}</p>
//     )
// }
// export default Effecthook

function Effecthook(){

    const[value,setValue]=useState(0)
    const[color,setColor]=useState('blue')
    const [data, setData] = useState('')
    const increment=()=>{
        setValue(value+5)
    }
    const changeColor=()=>{
        setColor("orange")
    }
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((res)=>res.json()).then((result)=>{
        console.log(result);
        setData(JSON.stringify(result))
    })
    

},[])
return(
    <>
    <h2 onClick={increment}>Number:{value}</h2>
    <h2 onClick={changeColor}>Color:{color}</h2>
    
    <p>{data}</p>
</>
)
}
export default Effecthook