import React, { useState } from "react";
import "./posts.css";
import { useNavigate } from "react-router-dom";

function Posts({ data, details, setDetails, setBody, setId, id }) {
  const navigate = useNavigate();

  const [i, seti] = useState(1);
  const filterz = data.filter((els) => els.userId === i);

  if (i === 11) {
    seti(1);
  }
  if (i <= 0) {
    seti(10);
  }
  return (
    <>
      {filterz.map(({ id, title, body }, idx) => {
        return (
          <div
            className="p-3 col-md-4 m-3 col-lg-3 text-left position-relative card-post"
            key={id}
          >
            <div className="text-white text-center mt-3 fs-3">
              Post Number : {id}
            </div>
            <h2 className="text-white mt-4">
              Title : <span className="text-title">{title}</span>
            </h2>

            <div
              className="text-info initialism Details"
              onClick={() => {
                details === id ? setDetails(null) : setDetails(id);
                setBody(body);
                setId(id);
              }}
            >
              <div className="text-center">
                <u onClick={() => navigate(`/details/${id}`)}>More Details</u>
              </div>
            </div>
            {/* <button
              className="btn btn-danger btn-x"
              onClick={() => (edit === id ? setedit(null) : setedit(id))}
            >
              Edit
            </button>
            {edit === id ? <input type="text" /> : ""} */}
          </div>
        );
      })}

      <div className="text-center mt-5">
        <button
          className="btn btn-danger me-5 mb-5"
          onClick={() => seti(i - 1)}
        >
          Prev
        </button>
        <button className="btn btn-info me-5 mb-5" onClick={() => seti(i + 1)}>
          Next
        </button>
      </div>
    </>
  );
}

export default Posts;
