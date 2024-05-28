import { db } from "../firebase";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function Blogs() {
  const handleDelete = async (id) => { 
    const data = doc(db, 'blog', id);
   
    toast.warn('Blog deleted successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      setTimeout(async()=>{ 
        await deleteDoc(data);
      },2000)

  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "blog");
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
    
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(data);

  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
      <Navbar />
      {data.map((d) => {
        return (
          <div
            className="container m-3 d-flex justify-content-center"
            style={{ flexDirection: "column", alignItems: "center" }}
            key={d.id}
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
              </div>
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
                    <h5 className="card-title">{d.title}</h5>
                    <p className="card-text">{d.short}</p>
                    <div
                      className="d-flex justify-content-center"
                      style={{ gap: "10%" }}
                    >
                      <Link to={`/blogs/${d.id}`} type="button" className="btn btn-primary">
                        View more
                      </Link>
                      <button type="button" id={d.id} className="btn btn-danger" onClick={() => handleDelete(d.id)}>
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
        );
      })}
    </>
  );
}

export default Blogs;
