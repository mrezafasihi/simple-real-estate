import React, { useEffect, useState } from "react";
import { useCustomeContext } from "../context/RealEstateContext";
import { json, Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Pagination } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

function ShowList() {
  const { allAd, setAllAd, selectedAd, setSelectedAd } = useCustomeContext();
  const pageCount: number | undefined = allAd?.length;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:3000/item?_page=${currentPage}&_limit=12`)
      .then((res) => res.json())
      .then((json) => setAllAd(json));
  }, [currentPage]);

  console.log(allAd);
  return (
    <>
      <div className="flex flex-wrap lg:px-32 md:px-12  justify-center">
        {allAd?.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => setSelectedAd(item)}
              className="cursor-pointer border hover:translate-x-1 hover:translate-y-1 bg-white w-full md:w-[29%] h-32 mb-10 mx-6  flex items-center justify-center"
            >
              <Link to={`ad/${item.id}`} className="text-center">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-center">
        <RightOutlined
          onClick={() => setCurrentPage(currentPage + 1)}
          className="hover:fill-red-600"
        />
        <p className="mx-14">{currentPage}</p>
        <LeftOutlined onClick={() => setCurrentPage(currentPage - 1)} />
      </div>
    </>
  );
}

export default ShowList;
