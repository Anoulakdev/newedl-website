import SearchIcon from "@/src/svg/search-icon";
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Pass the search term to PostboxArea
  };
  return (
    <>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3
            className="sidebar__widget-title"
            style={{ fontFamily: "Noto Sans Lao", fontSize: "25px" }}
          >
            ຄົ້ນ​ຫາ
          </h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form onSubmit={handleSubmit}>
              <div className="sidebar__search-input-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="ປ້ອນ​ຫົວ​ຂໍ້​ແຈ້ງ​ການ..."
                />
                <button type="submit">
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
