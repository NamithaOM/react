import React, { useState } from "react";
// function Regform(){
// const [color,setColor]= useState('green')

// const handleColor =()=>{
//     setColor('yellow')
// }


//     const submitForm=(e)=>{
//         e.preventDefault()
// console.log("submits");

//     }  

// return(
//     <>
//             <form onSubmit={submitForm}>
                /* Name<input type="text"></input> <br></br>
                Gender Male<input type="radio"></input>
                Female<input type="radio"></input>
                DOB<input type="date"></input>
                Address<textarea></textarea> */
            
            // </form>

            // <br/>

            //  <h4 onClick={handleColor}>{color}</h4> 
   
//     </>
   
// )
// }
// export default Regform


// import React, { useState } from "react";
function Regform(){
    // var count=0
const [value,setValue]=useState(0)

const changes=()=>{
    setValue(value+5) 
}

const decrese=()=>{
    setValue(value-3)
}

const reset=()=>{
    setValue(0)
}
// count=value+count

return(
    <>
            <h4>The value is {value}</h4>
                <button type="submit" onClick={changes}>increment</button>
                <button type="submit" onClick={decrese}>Decrement</button>
                <button type="submit" onClick={reset}>Reset</button>

    </>
   
)
}
export default Regform

