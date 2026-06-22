import React, {useState} from "react"; 
function App(){ 
   const[name,setName]=useState(""); 
   const[email,setEmail]=useState(""); 
   const[password,setPassword]=useState(""); 
   const[errors,setErrors]=useState({}); 
   const[success,setSuccess]=useState(""); 
   const[user,setUser]=useState([]); 
   const handlesubmit=(e)=>{ 
    e.preventDefault(); 
    let formError={}; 
    if(name.trim()===""){ 
      formError.name="name is required"; 
    } 
    if(!email.includes("@")){ 
      formError.email="email must contain @"; 
    } 
    if(password.length<6){ 
      formError.password="password must be atleast 6 characters"; 
    } 
    setErrors(formError); 
    if(Object.keys(formError).length===0){ 
      const newUser={ 
        name: name, 
        email:email 
      }; 
      setUser([...user,newUser]); 
      setSuccess("Registration Successfull"); 
      setName(""); 
      setEmail(""); 
      setPassword(""); 
       
    } 
   }; 
   return( 
    <div className="container"> 
      <h2>Registration Form</h2> 
      <form onSubmit={handlesubmit}> 
        <input 
        type="text" 
        placeholder="Enter name" 
        value={name} 
        onChange={(e)=>setName(e.target.value)} 
        /> 
         <input 
        type="text" 
        placeholder="Enter email" 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} 
        /> 
        <p className="error">{errors.email}</p> 
         <input 
        type="text" 
        placeholder="Enter password" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} 
        /> 
        <p className="error">{errors.password}</p> 
        <button type="submit">Register</button> 
 
      </form> 
      <p className="success">{success}</p> 
      {user.length>0 &&( 
        <div className="apidata"> 
          <h3>Registered user :</h3> 
          <ul> 
            {user.map((user,index) => ( 
              <li key={index}> 
                {user.name} - {user.email} 
              </li> 
            ))} 
          </ul> 
        </div> 
      )} 
    </div> 
   ); 
  } 
    
export default App; 