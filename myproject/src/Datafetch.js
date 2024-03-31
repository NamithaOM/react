import React, { useEffect, useState } from "react";


function Datafetch() {
    const [data, setData] = useState('')

    const [value, setValue] = useState('')

    const [employees, setEmployees] = useState('')

    const findData = () => {
        const empid = document.getElementById("num").value
        console.log(empid);
        setValue(empid)
    }

    useEffect(() => {
        if(value!==''){
        fetch('https://dummy.restapiexample.com/api/v1/employees').then((res) => res.json()).then((result) => {
            console.log(result)

            setData(JSON.stringify(result))

            const employee = result.data.find((emp) => emp.id === parseInt(value));
            setEmployees(employee);
        })
    }
    // else{
    //     console.log("error")
    // }
    }, [value])
    
    return (
        <>

            Enter id<input type="text" id='num'></input>
            <button onClick={findData}>search</button>
            
            {employees ? (
            
           <div>
            Employee name:{employees.employee_name}<br></br>
            Employee salary:{employees.employee_salary }<br></br>
            Employee age:{ employees.employee_age} <br></br><br></br>

            {data}

           </div>
            ):
            (
                console.log("id not entered")
            )
            }
        </>
    );
    }
export default Datafetch