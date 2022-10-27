import React from "react";

function Detailss({ details, id, body }) {
  return (
    <>
      <div className="p-5">
        {details === id ? (
          <h5 className="text-info text-center">
            Body : <div className="text-title mt-4">{body}</div>
          </h5>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Detailss;
