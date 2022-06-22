import React, { useState } from "react";
const baseurl = "https://nominatim.openstreetmap.org/search?";
const SearchBox = (props) => {
  const {select,setSelect}=props;
  const [search, setSearch] = useState("");
  const [listPlace,setListPlace] = useState([])
  // console.log(search)
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="ui action input"
        style={{ width: "100%"}}
      >
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        <button
          className="ui blue icon button"
          onClick={() => {
            // search
            const params = {
                q:search,
                format:'json',
                addressdetails:1,
                polygon_geojson:0
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOptions = {
                method:"GET",
                redirect:"follow"
            };
            fetch(`${baseurl}${queryString}`,requestOptions).then((response)=>response.text())
            .then((result)=>{
                console.log(JSON.parse(result))
                setListPlace(JSON.parse(result))
            }).catch((err)=>console.log(err))
          }}
        >
        <i className="ui search icon"></i>
        </button>
      </div>
      <div>
        <div className="ui list">
          {listPlace.map((vari) => {
            return (
              <div key={vari?.place_id}>
                <div className="item" type="ui icon button" onClick={()=>{
                    setSelect(vari)
                }}>
                  <img
                    src="./placeholder.png"
                    alt="placeholder"
                    style={{ width: 38, height: 38 ,paddingLeft:10,paddingRight:10}}
                  />&nbsp;
                  <i>{vari?.display_name}</i>
                </div>
                <div className="ui clearing divider"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

