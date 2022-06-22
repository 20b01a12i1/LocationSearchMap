import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";


function App() {
  const [select,setSelect]= useState(null);
  console.log(select)
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      height: "100vh",
    }}>
      <div style={{width: "50vw",height:"100%"}}>
        <Maps select={select}/>
      </div>
      <div style={{width: "50vw"}}>
        <SearchBox select={select} setSelect={setSelect}/>
      </div>
      
    </div>
  );
}

export default App;

