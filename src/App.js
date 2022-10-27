import React, { useEffect, useState } from "react";

import Posts from "./ِCommponts/Posts/Posts";
import Details from "./ِCommponts/Details/Details";
import apiUrl from "./Config/Config";
import { Notfound } from "./Config/NotFound";

import { Route, Routes, NavLink, useParams } from "react-router-dom";

function App() {
  const [data, setData] = useState();
  const [body, setBody] = useState();
  const [details, setDetails] = useState(null);
  const [id, setId] = useState();

  const { getId } = useParams();

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <>
      <NavLink to={"/"}>
        <nav className="bg-nav pb-3">
          <div className="text-center">
            <button className="btn btn-info mt-3 ">Home</button>
          </div>
        </nav>
      </NavLink>

      <div className="container container-big">
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
                    id={id}
                    getId={getId}
                    setId={setId}
                  />
                )
              }
            />
            <Route
              path={`/details/:getId`}
              element={<Details body={body} id={id} details={details} />}
            />
            <Route path={"*"} element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
