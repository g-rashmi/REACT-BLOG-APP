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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <button 
        style={{
          display: "flex", 
          alignItems: "center", 
          width: "50%", 
          padding: "10px", 
          border: "none", 
          borderRadius: "5px", 
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)", 
          cursor: "pointer",
          maxWidth: "300px", // Limit button width for small screens
        }} 
        onClick={handleGoogle}
      >
        <div style={{ marginRight: "10px" }}>
          <img src="https://freelogopng.com/images/all_img/1657955079google-icon-png.png" alt="" style={{ width: "30px" }} />
        </div>
        <div>
          <h2 style={{ margin: 0 }}>Login with Google</h2>
        </div>
      </button>
    </div>
  );
}

export default Login;
