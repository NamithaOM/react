import React from "react";
function Events() {
    // onclick
    const ClickButton = () => {
        alert('evented')
console.log("clicked");

    }
// onsubmit
    const submitForm=(e)=>{
        e.preventDefault()
console.log("submits");
    }    

    // onchange
const txt=()=>{
console.log("hellooo!")
}

    return (
        <>

            <button onClick={ClickButton}>Click</button>
            <form onSubmit={submitForm}>
                <button type="submit">Click</button>
            </form>

                <input type="text" onChange={txt}></input>

           
        </>
    )

}

export default Events


