import React,{useState} from "react";
 
function App(){
     const [value1,setValue]=useState("");
     const [error,setError]=useState(true);
 
    const uploadImage=()=>{
        dragable="true"
    }

    const handleChange=()=>{
        if(value1===""){
            setError(false)
        }else{
            setError(true)
            alert(`name:${value1}`)
        }
    }
 
    
    return(
         <div style={{padding:"10px", margin:"20px"}}>
          <form >
          <label style={{textAlign:"center",marginRight:"10px"}}>Name</label>
              <input 
                type="text"
                value={value1}
                placeHolder="Enter the name"
                onChange={(e)=>setValue(e.target.value)
                }
                style={{marginRight:"10px", padding:"3px", borderRadius:"5px"}}/>
                <button style={{padding:"5px",boxShadow:"2px 0px 0px rgba(0, 0, 0, 0.2)",textAlign:"center", borderRaduis:"5px"}} 
                onClick={handleChange}>
               Submit
           </button>
        <button style={{padding:"10px",marginTop:"20px", marginLeft:"75px"}} onClick={uploadImage}> Uplaod Image</button>
       </form>
     </div>
    )
}

export default App;
