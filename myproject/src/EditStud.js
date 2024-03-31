import React from "react";
function EditStud(){

   const EditForm=(e)=>{
    e.preventDefault()
}
return(
    <>
     <form onSubmit={EditForm}>
                first Name<input type="text" name="fnames" ></input>
                Last Name<input type="text" name="lnames"></input>

                <button type="submit">Update</button>
            </form>
    </>
)
}
export default EditStud