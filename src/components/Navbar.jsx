
import { Link,useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Navbar() { 
const navigate=useNavigate();
const auth = getAuth();
const location=useLocation();
  const logout=()=>{
auth.signOut();
navigate("/")
  }
 
  

  return (
    <>
      <div
        className="user-details navi"
        style={{
          display: "flex",
          height: "15vh", 
          flexWrap:"wrap",
        
          padding: "1%",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            src={auth.currentUser.photoURL}
            alt=""
            style={{  
              height: "5vw", 
              padding:"2px" ,borderRadius: "50%", transition: "transform 0.3s" }}
          />
          <h2 style={{ margin: 0 }}>{auth.currentUser.displayName}</h2>
        </div>
        <div
          className="d-flex"
          style={{ alignItems: "center", gap: "1rem" }}
        >
         {(location.pathname=='/blogs')? (<Link to="/addblogs" type="button" className="btn btn-warning">
            AddBlog
          </Link>): (<Link to="/blogs" type="button" className="btn btn-warning">
          Back to Blog
        </Link>)}
          <h4 style={{ margin: 0 }}>{auth.currentUser.email}</h4>
          <button type="button" className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
