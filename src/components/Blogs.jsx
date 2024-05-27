
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
function Blogs() {
  
  const [data, setData] = useState([]);
  
  const collectionRef = collection(db, "blog");
  useEffect(() => {
    
      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
    
 unsubscribe();
 console.log(data);
  }, []);
  return (
    <>
      <Navbar /> 
      {data.map((d)=>{
        <div
        className="container m-3 d-flex justify-content-center"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <div className="con">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              justifyContent: "center",
            }}
          >
            <img
              src={d.authorimg}
              alt=""
              style={{
                height: "2.3vw",
                padding: "2px",
                borderRadius: "50%",
              }}
            />
            <h4 style={{ color: "white" }}>{d.authorname}</h4>
          </div>{" "}
        </div>
        <div className="card mb-3 " style={{ width: "50%" }}>
          <div className="row g-0 ">
            <div className="col-md-4 bg-red">
              <img
                src={d.iurl}
                className="img-fluid rounded-start w-100vw"
                style={{
                  height: "100%",
                }}
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{ d.title}</h5>
                <p className="card-text">
                  {d.short}
                </p>
                <div
                  className="d-flex justify-content-center"
                  style={{ gap: "10%" }}
                >
                  <button type="button" className="btn btn-primary">
                    View more
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      })

      }
  </>
  );
}

export default Blogs;
