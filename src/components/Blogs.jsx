import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 

function Blogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "blog");
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      setData(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleDelete = async (id) => {
    const docRef = doc(db, 'blog', id);

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

    setTimeout(async () => {
      await deleteDoc(docRef);
    }, 2000);
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {data.map((d) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={d.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-header d-flex align-items-center">
                  <img
                    src={d.authorimg}
                    alt=""
                    className="rounded-circle me-2 author-img"
                  />
                  <h5 className="mb-0 author-name">{d.authorname}</h5>
                </div>
                <img
                  src={d.iurl}
                  className="card-img-top"
                  alt="Blog"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text">{d.short}</p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/blogs/${d.id}`} className="btn btn-primary">
                      View more
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(d.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="card-footer text-muted">
                  Last updated 3 mins ago
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
