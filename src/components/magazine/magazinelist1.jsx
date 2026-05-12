import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Rolling from "@/public/images/gif/Rolling.gif";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/magazines/get`,
          {
            headers: {
              "Content-Type": "application/json", // Set Content-Type header
            },
          }
        );
        setData(response.data.data);
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    let l;
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const handlePageChange = (pageNumber, e) => {
    e.preventDefault();
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text == null) return ""; // Return an empty string or some default value

    if (typeof text !== "string") return "";

    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      {isLoading ? (
        <div className="text-center pt-30">
          <Image src={Rolling} width={100} height={100} />
        </div>
      ) : (
        <div className="portfolio blog-grid-inner mb-30">
          <div className="container">
            <div className="row grid blog-grid-inner pt-50">
              {currentItems.length ? (
                currentItems.map((item, i) => (
                  <div
                    key={i}
                    data-index={i}
                    className="col-xl-3 col-lg-4 col-md-6 col-12 mb-40 grid-item text-center"
                  >
                    <div 
                      className="wow tpfadeUp h-100 d-flex flex-column align-items-center"
                      style={{ transition: "all 0.3s ease", cursor: "pointer" }}
                      onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div className="magazine-image-wrapper shadow-sm rounded-4 overflow-hidden mb-3 w-100" style={{ border: "1px solid rgba(0,0,0,0.05)" }}>
                        {item.file_url?.startsWith("https://drive.google.com") ? (
                          <Link href={item.file_url} target="_blank" className="d-block">
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/magazines/${item.image}`}
                              alt={item.title || "Magazine"}
                              className="img-fluid w-100"
                              style={{ height: "350px", objectFit: "cover", transition: "transform 0.5s ease" }}
                              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                          </Link>
                        ) : (
                          <Link
                            href={{
                              pathname: "/magazine_detail",
                              query: { magazine_id: item.id },
                            }}
                            className="d-block"
                          >
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL_IMG}/magazines/${item.image}`}
                              alt={item.title || "Magazine"}
                              className="img-fluid w-100"
                              style={{ height: "350px", objectFit: "cover", transition: "transform 0.5s ease" }}
                              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                          </Link>
                        )}
                      </div>
                      <h5
                        className="text-center mt-2 px-2"
                        style={{ 
                          fontFamily: "Noto Sans Lao",
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "#2c3e50",
                          lineHeight: "1.5"
                        }}
                      >
                        {truncateText(item.title, 50)}
                      </h5>
                    </div>
                  </div>
                ))
              ) : (
                <h2
                  className="text-center mt-4"
                  style={{ fontFamily: "Noto Sans Lao" }}
                >
                  ຍັງ​ບໍ່​ມີ​ຂໍ້​ມູນ
                </h2>
              )}
            </div>

            <div className="basic-pagination text-center mt-5">
              <nav>
                <ul>
                  <li>
                    <Link
                      href="#"
                      onClick={(e) => handlePageChange(currentPage - 1, e)}
                      aria-disabled={currentPage === 1}
                    >
                      <i className="far fa-angle-left"></i>
                    </Link>
                  </li>
                  {getPageNumbers().map((item, index) => (
                    <li key={index}>
                      {item === "..." ? (
                        <span>{item}</span>
                      ) : (
                        <Link
                          href="#"
                          className={currentPage === item ? "current" : ""}
                          onClick={(e) => handlePageChange(item, e)}
                        >
                          {item}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li>
                    <Link
                      href="#"
                      onClick={(e) => handlePageChange(currentPage + 1, e)}
                      aria-disabled={currentPage === totalPages}
                    >
                      <i className="far fa-angle-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
