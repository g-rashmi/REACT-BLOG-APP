
import Navbar from "./Navbar"  
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
function Addblog() { 
  const navigate=useNavigate();
const [title,setTitle]=useState(""); 
const [short,setShort]=useState(""); 
const [detail,setDetail]=useState(""); 
const[iurl,setIurl]=useState("");   
const authname= getAuth().currentUser.displayName; 
const authimg=getAuth().currentUser.photoURL
const handleSubmit = async (event) => {
  event.preventDefault();

  if (title && short && detail && iurl) {
    try {
      
      await addDoc( 
        collection(db, 'blog'), {
        title: title,
        short: short,
        detail: detail,
        iurl: iurl,
        authorname:authname, 
        authorimg:authimg
      });
      console.log('Data saved successfully!');
      alert('Blog submitted successfully!');
      setTitle('');
      setShort('');
      setDetail('');
      setIurl(''); 
      navigate("/blogs");
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  } else {
    alert('Please fill out all fields.');
  }
};
  return (
    <div>
    <Navbar/>
    <div className="container " style={{ alignItems:"center" , display:"flex" , height:"79vh",justifyContent:"center",marginTop:"1%"}}>
     <form>
    <div className="mb-2" style={{width:"40vw"}}>
      <label className="form-label">Title</label>
      <input type="text" className="form-control" required  onChange={(e)=>{setTitle(e.target.value)}}/>
      <div className="form-text"> </div>
    </div>
   
    <div className="mb-2">
    <label className="form-label">Short-Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" required onChange={(e)=>{setShort(e.target.value)}}/>
  </div> 
  <div className="mb-1">
  <label className="form-label">Full-Description</label>
  <textarea type="" className="form-control" onChange={(e)=>{setDetail(e.target.value)}} required/>
</div>  
<div className="mb-1">
<label className="form-label">Image-URL</label>
<input type="url" className="form-control" required id="exampleInputPassword1" onChange={(e)=>{setIurl(e.target.value)}}/>
</div> 

   <div className="my-3 text-center">   <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button></div>

  
  </form></div>
    </div>
  )
}

export default Addblog
