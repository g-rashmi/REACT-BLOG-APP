import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import Navbar from "./Navbar";

function OneBlog() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleData = await getDoc(doc(db, "blog", id));
        setData(singleData.data());
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container" style={{ padding: "20px" }}>
        <div
          className="card"
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: "#f8f9fa", padding: "10px" }}
          >
            <h2>{data.title}</h2>
          </div>
          <div className="card-body" style={{ padding: "20px" }}>
            <p>{data.detail}</p>
            <p>Author: {data.authorname}</p>
            <img
              src={data.iurl}
              alt="Author"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginTop: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneBlog;
