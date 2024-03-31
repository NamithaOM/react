
import React from "react";

function Ternary() {
    const examresult = () => {
        let mark = 50;
        let result = mark > 45 ? "pass" : "fail";
        console.log(result);
    };

    return (
        
<p>{examresult()} </p>    
);
}

export default Ternary;
