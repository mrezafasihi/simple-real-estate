import React, { useEffect } from "react";
import { useCustomeContext } from "../context/RealEstateContext";
import { Link } from "react-router-dom";

function ShowList() {
  const { allAd, setAllAd, selectedAd,setSelectedAd} = useCustomeContext();
  useEffect(() => {
    fetch("http://localhost:3000/item")
      .then((res) => res.json())
      .then((json) => setAllAd(json));
  }, []);

  return (
    <div>
      {allAd?.map((item) => {
        return <div key={item.id} onClick={()=>setSelectedAd(item)}><Link to={`ad/${item.id}`} className="cursor-pointer">{item.title}</Link></div>;
      })}
    </div>
  );
}

export default ShowList;
