import React from "react";
function Forms(){

    const submitForm=(e)=>{
        e.preventDefault()
console.log("submits");
    }  

return(
    <>
            <form onSubmit={submitForm}>
                <button type="submit">Click</button>
            </form>
   
    </>
   
)
}
export default Forms