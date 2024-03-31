import React, { useEffect, useState } from "react";

// function Abc() {
//     const [data, setData] = useState([]);
//     const [value, setValue] = useState('');
//     const [employee, setEmployee] = useState(null);

//     useEffect(() => {
//         fetch('https://dummy.restapiexample.com/api/v1/employees')
//             .then((res) => res.json())
//             .then((result) => {
//                 console.log(result);
//                 setData(result.data); // Assuming the API response has a 'data' property containing employee array
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const findData = () => {
//         const empId = parseInt(value);
//         if (!isNaN(empId)) {
//             const findemp = data.find((employee) => employee.id === empId);
//             console.log(findemp);
//             setEmployee(findemp);
//         }
//     };

//     return (
//         <>
//             Enter id: <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
//             <button onClick={findData}>Search</button>

//             {employee && (
//                 <>
//                     <br />Employee name: {employee.employee_name}
//                     <br />Employee salary: {employee.employee_salary}
//                     <br />Employee age: {employee.employee_age}
//                 </>
//             )}

//             <p>{JSON.stringify(data)}</p>
//         </>
//     );
// }

// export default Abc;


// import React, { useState, useEffect } from 'react';

// function Abc({ employeeId }) {
//   const [employee, setEmployee] = useState(null);

//   useEffect(() => {
//     fetch(`https://dummy.restapiexample.com/api/v1/employee/${employeeId}`)
//       .then((res) => res.json())
//       .then((result) => {
//         setEmployee(result.data); // Assuming the employee data is under the 'data' key
//       })
//       .catch((error) => {
//         console.error('Error fetching employee details:', error);
//       });
//   }, [employeeId]);

//   if (!employee) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Employee Details</h2>
//       <p>Name: {employee.employee_name}</p>
//       <p>Salary: {employee.employee_salary}</p>
//       <p>Age: {employee.employee_age}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// }

// export default Abc;

// import React, { useEffect, useState } from "react";


// function Abc() {
//     const [data, setData] = useState('')

//     // const [value, setValue] = useState('')
//     useEffect(() => {
//         fetch('https://dummy.restapiexample.com/api/v1/employees').then((res) => res.json()).then((result) => {
//             console.log(result)
//             setData (JSON.stringify(result))
//         })
//     }, [])


//     return (
//         <>

//             Enter id<input type="text" id='num'></input>
//             <button onClick>search</button>{data}
            
//             <br></br>Employee name:{}<br></br>
//             Employee salary:{}<br></br>
//             Employee age:{}


//         </>
//     );
//     }
// export default Abc

// function Abc() {
//     const [data, setData] = useState('');
//     const [employeeId, setEmployeeId] = useState('');
//     const [employeeDetails, setEmployeeDetails] = useState(null);

//     useEffect(() => {
//         if (employeeId !== '') {
//             fetch(`https://dummy.restapiexample.com/api/v1/employee/`)
//                 .then((res) => res.json())
//                 .then((result) => {
//                     console.log(result);
//                     setEmployeeDetails(result.data); // Assuming the employee details are under a 'data' key
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching employee details:', error);
//                     setEmployeeDetails(null);
//                 });
//         }
//     }, [employeeId]);

//     const handleSearch = () => {
//         const input = document.getElementById('num').value;
//         setEmployeeId(input);
//     };

//     return (
//         <>
//             <div>
//                 {data},{setData}
//                 Enter ID: <input type="text" id="num" />
//                 <button onClick={handleSearch}>Search</button>
//             </div>

//             <div>
//                 {employeeDetails ? (
//                     <>
//                         <p>Employee name: {employeeDetails.employee_name}</p>
//                         <p>Employee salary: {employeeDetails.employee_salary}</p>
//                         <p>Employee age: {employeeDetails.employee_age}</p>
//                     </>
//                 ) : <p>error</p>}
//             </div>
//         </>
//     );
// }

// export default Abc;
// import React, { useState, useEffect } from 'react';

// function Abc() {
//     const [employeeId, setEmployeeId] = useState('');
//     const [employeeDetails, setEmployeeDetails] = useState(null);

//     const handleSearch = () => {
//         const input = document.getElementById('num').value;
//         setEmployeeId(input);
//     };

//     useEffect(() => {
//         if (employeeId !== '') {
//             fetch('https://dummy.restapiexample.com/api/v1/employees')
//                 .then((res) => res.json())
//                 .then((result) => {
//                     const employee = result.data.find((emp) => emp.id === parseInt(employeeId));
//                         setEmployeeDetails(employee);
                  
//                 })
          
//         }
//     }, [employeeId]);

//     return (
//         <>
//             <div>
//                 Enter ID: <input type="text" id="num" />
//                 <button onClick={handleSearch}>Search</button>
//             </div>

//             <div>
//                 {employeeDetails ? (
//                     <>
//                         <p>Employee name: {employeeDetails.employee_name}</p>
//                         <p>Employee salary: {employeeDetails.employee_salary}</p>
//                         <p>Employee age: {employeeDetails.employee_age}</p>
//                     </>
//                 ) : (
//                     <p>No employee found with the provided ID.</p>
//                 )}
//             </div>
//         </>
//     );
// }

// export default Abc;

// import React, { useState, useEffect } from 'react';


// import React, { useEffect, useState } from "react";

function Abc() {
    const [data, setData] = useState('');
    const [value, setValue] = useState('');
    const [employees, setEmployees] = useState(null); // Change initial state to null

    const findData = () => {
        const empid = document.getElementById("num").value;
        console.log(empid);
        setValue(empid);
    };

    useEffect(() => {
        if(value !== '') {
            fetch('https://dummy.restapiexample.com/api/v1/employees')
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    setData(JSON.stringify(result));

                    const employee = result.data.find((emp) => emp.id === parseInt(value));
                    setEmployees(employee);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setEmployees(null); // Reset employees state if there's an error
                });
        } else {
            setEmployees(null); // Reset employees state if no ID is entered
        }
    }, [value]);
    
    return (
        <>
            Enter id<input type="text" id="num"></input>
            <button onClick={findData}>search</button>
            
            {employees !== null ? (
                <div>
                    Employee name: {employees ? employees.employee_name : 'Not found'}<br />
                    Employee salary: {employees ? employees.employee_salary : 'Not found'}<br />
                    Employee age: {employees ? employees.employee_age : 'Not found'}<br /><br />
                    {data}
                </div>
            ) : (
                <p>No employee found</p>
            )}
        </>
    );
}

export default Abc;
