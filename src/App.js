import React,{useEffect,useState} from "react";
import Posts from "./ِCommponts/Posts/Posts";
import {BrowserRouter,Route,Routes,NavLink} from "react-router-dom";
import Details from "./ِCommponts/Details/Details";

 function App() {

  const url = "https://jsonplaceholder.typicode.com/posts";

  const [Data, setData] = useState();
  const [body, setbody] = useState()
  const [Detailsz, setDetailsz] = useState(null)
  const [id, setid] = useState()

  useEffect(() => {
             fetch(url)
                  .then((res) =>  res.json())
                  .then((json) => {
                  setData(json)
                  }
        )
  }, [])

  return (  
        <BrowserRouter>
        <div className="container">
                <NavLink to={"/home"}>
                <div className="text-center"><button className="btn btn-info">Home</button></div>
                </NavLink>

        <div id="Menu" className="row d-flex justify-content-evenly">

            <Routes>
            <Route path="/home" element={Data&&<Posts data={Data} NavLink={NavLink} setbody={setbody} Detailsz={Detailsz} setDetailsz={setDetailsz} setid={setid}/>}/>
            <Route path="/details" element={<Details body={body} id={id} Detailsz={Detailsz}/>}/>
            </Routes>

        </div>
        </div>
        </BrowserRouter>
  );
}

export default App;
