import React from "react";
function Newmap() {
    const arr = ["kiwi", "mango", "apple", "orange"]
    return (
        <table>
            <tr>
                <th>sl.no</th>
                <th>Fruits</th>

            </tr>

            {arr.map((values, index) => {
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{values}</td>
                    </tr>
                )
            })}

        </table>
    )
}
export default Newmap