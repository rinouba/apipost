import React, { useState } from "react";
import "./posts.css";
import { NavLink } from "react-router-dom";

function Posts({ data, details, setDetails, setId, setBody }) {
  const [i, seti] = useState(1);
  const filterz = data.filter((els) => els.userId === i);
  const [edit, setedit] = useState(null);

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
            className="border p-3 col-md-4 m-3 col-lg-3 text-left position-relative"
            key={id}
          >
            <div className="text-white">Number Post : {id}</div>
            <h2 className="text-white">
              Title : <span className="text-danger">{title}</span>
            </h2>

            <div
              className="text-info initialism Details"
              onClick={() => {
                details === id ? setDetails(null) : setDetails(id);
                setId(id);
                setBody(body);
              }}
            >
              <NavLink to={"/details"}>
                <u>More Details</u>
              </NavLink>
            </div>
            <button
              className="btn btn-danger btn-x"
              onClick={() => (edit === id ? setedit(null) : setedit(id))}
            >
              Edit
            </button>
            {edit === id ? <input type="text" /> : ""}
          </div>
        );
      })}

      <div className="text-center">
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
