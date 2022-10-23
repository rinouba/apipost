import React from "react";

function Detailss({ details, id, body }) {
  return (
    <>{details === id ? <h5 className="text-white">Body : {body}</h5> : ""}</>
  );
}

export default Detailss;
