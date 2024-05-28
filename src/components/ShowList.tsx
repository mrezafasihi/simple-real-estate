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

  const prevPagination = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const nextPagination = () => {
    if (allAd?.length == 12) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="flex flex-wrap lg:px-32 md:px-12  justify-center">
        {allAd?.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => setSelectedAd(item)}
              className="cursor-pointer dark:bg-slate-800 rounded-md dark:border-none border hover:translate-x-1 hover:translate-y-1 bg-white w-full md:w-[29%] h-32 mb-10 mx-6  flex items-center justify-center"
            >
              <Link
                to={`ad/${item.id}`}
                className="flex flex-col justify-center items-center h-full w-full "
              >
                <p>{item.title}</p>
                <p>
                  {item.price}
                  <span> تومان </span>
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-center pb-4">
        <RightOutlined
          onClick={nextPagination}
          className={`${
            allAd?.length !== 12 ? "text-gray-300 " : "hover:text-red-600  "
          }text-xl`}
        />
        <p className="mx-14  text-lg">{currentPage}</p>
        <LeftOutlined
          className={`${
            currentPage == 1 ? "text-gray-300 " : "hover:text-red-600  "
          }text-xl`}
          onClick={prevPagination}
        />
      </div>
    </>
  );
}

export default ShowList;
