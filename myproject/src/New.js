import React, { useEffect, useState } from "react";
function New() {
    const [firstname, setFirst] = useState('')
    const [secondname, setSecond] = useState('')
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(0)
    // const [delStud, setDelstud] = useState('')


    // const [value, setValue] = useState('')
    // useEffect(() => {
    //     fetch('http://localhost:5000/').then((res) => res.json()).then((result) => {
    //         console.log(result);
    //         setValue(result)
    //     })
    // }, [])

    const handleForm = (e) => {
        e.preventDefault()
        let params = {
            fname: firstname,
            lname: secondname
        }
        fetch('http://localhost:5000/register', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json()).then((result) => {
            console.log(result);
            setFirst('')
            setSecond('')
        })
    }

    useEffect(() => {
        fetch('http://localhost:5000/viewform').then((res) => res.json()).then((result) => {
            console.log(result);
            setData(result)
        })
    }, [refresh])

   const deleteStud =(iD)=>{
    let param ={
        id:iD
    }
    fetch('http://localhost:5000/delete',{
        method:'post',
        headers:{
            Accept:'appliction/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(param)
    }).then((res)=>res.json()).then((result)=>{
        console.log(result);
        setRefresh(prev=>prev+1)
    })
   }

    return (
        <>
            {/* <p>{value}</p> */}

            <form onSubmit={handleForm}>
                first Name<input type="text" name="fname" onChange={(e) => setFirst(e.target.value)}></input>
                Last Name<input type="text" name="lname" onChange={(e) => setSecond(e.target.value)}></input>

                <button type="submit">Click</button>
            </form>

            <div>
                <table>
                    <tr>
                        <th> First name</th>
                        <th>Second name</th>
                        <th>Action</th>
                    </tr>
                    {data.map((datas) => {
                        return (

                            <tr>
                                <td>{datas.fname}</td>
                                <td>{datas.lname}</td>
                                <button type="submit" onClick={()=>deleteStud(datas._id)}>Delete</button>
                                <button type="submit">Update</button>
                            </tr>
                        )
                    })}

                </table>
            </div>
        </>
    )
}
export default New