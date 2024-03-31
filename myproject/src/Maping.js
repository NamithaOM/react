import React from "react";
function Maping(){
    let item=["brinjal", "chilli", "pumpkin","bitter gourd"]
     return(
        <ol>
            {item.map((values,index)=>{
                return(
                    <>
                    <li>{values}</li></>
                    

                )
            })}
        </ol>
    //     <table>
    //         <tr>
    //             <th>vegetables</th>
    //         </tr>
    //        {item.map((values,index)=>{
    //         return(
    //             <tr>
    //                 <td>{index+1}</td>
    //             <td>{values} </td>
    //         </tr>
    //         )
    //        })}
        

    //     </table>
    )
}
export default Maping