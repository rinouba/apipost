import React, { useEffect, useState } from "react";

import Posts from "./ِCommponts/Posts/Posts";
import Details from "./ِCommponts/Details/Details";
import apiUrl from "./Config/Config";

import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function App() {
  const [data, setData] = useState();
  const [body, setBody] = useState();
  const [details, setDetails] = useState(null);
  const [id, setId] = useState();

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <NavLink to={"/"}>
          <div className="text-center">
            <button className="btn btn-info">Home</button>
          </div>
        </NavLink>

        <div id="Menu" className="row d-flex justify-content-evenly">
          <Routes>
            <Route
              path="/"
              element={
                data && (
                  <Posts
                    data={data}
                    NavLink={NavLink}
                    setBody={setBody}
                    Detailsz={details}
                    setDetails={setDetails}
                    setId={setId}
                  />
                )
              }
            />
            <Route
              path="/details"
              element={<Details body={body} id={id} details={details} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
