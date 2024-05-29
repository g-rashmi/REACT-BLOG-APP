import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

function Login() { 
  const navigate=useNavigate();
  const handleGoogle = async (e) => {
    e.preventDefault();  
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result); 
      navigate('/blogs')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-center" style={{position:"relative",top:"30vh" ,left:"30vw"}}>
    <button
    className="d-flex align-items-center my-5 text-center" style={{backgroundColor:"white",width:"29%" ,justifyConten:"center", gap:"5%",alignItem:"center"}} 
    onClick={handleGoogle}>
    <div style={{width:"14%"}}>
      <img
        src="https://freelogopng.com/images/all_img/1657955079google-icon-png.png"
        alt=""
        style={{ width: "100%" }}
      />
    </div>
    <div>
      {" "}
      <h2 style={{fontWeight:"bold",color:"linear-gradient(90deg, #0b131b, #010f1b)"}}>Login with Google</h2>
    </div>
  </button>
    </div>
  );
}

export default Login;
