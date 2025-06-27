import React from "react";
import { useContext, useState } from "react";
import { FilterContext } from "../context/FilterContent";

const Sidebar = () => {
  const {
    search,
    setSearch,
    sort,
    setSort,
    category,
    setCategory,
    type,
    setType,
  } = useContext(FilterContext);

  return (
    <div className="my-15 text-lg w-full md:w-[15rem] flex flex-col gap-4 mb-6 md:mb-0">
      <p>FILTERS</p>

      <input
        type="text"
        className="border border-gray-400 text-sm rounded-l-full rounded-r-full p-1 my-5 "
        placeholder="Search 🔍︎"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <select
        name="sort"
        onChange={(e) => {
          setSort(e.target.value);
        }}
        className="border border-gray-300"
      >
        <option value="old">Oldest to Newest</option>
        <option value="new">Newest to Oldest</option>
      </select>

      <div className="border border-gray-300 p-2">
        <p>Categories</p>
        <div className="flex flex-col gap-2 my-2">
          <div className="text-sm text-gray-600">
            <input
              type="radio"
              name="category"
              className=""
              onChange={() => {
                setCategory("fulltime");
              }}
            />{" "}
            Full-time
          </div>

          <div className="text-sm text-gray-600">
            <input
              type="radio"
              name="category"
              onChange={() => {
                setCategory("parttime");
              }}
            />{" "}
            Part-time
          </div>

          <div className="text-sm text-gray-600">
            <input
              type="radio"
              name="category"
              onChange={() => {
                setCategory("intern");
              }}
            />{" "}
            Intern
          </div>
        </div>
      </div>

      <div className="border border-gray-300 p-2">
        <p>Type</p>
        <div className="flex flex-col gap-2 my-2">
          <div className="text-sm text-gray-600">
            <input
              type="radio"
              name="type"
              className=""
              onChange={() => {
                setType("remote");
              }}
            />{" "}
            Remote
          </div>

          <div className="text-sm text-gray-600">
            <input
              type="radio"
              name="type"
              onChange={() => {
                setType("wfo");
              }}
            />{" "}
            Work from Office
          </div>

          <div className="text-sm text-gray-600">
            <input
              type="radio"
              name="type"
              onChange={() => {
                setType("semiwfh");
              }}
            />{" "}
            Semi-WFH
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
