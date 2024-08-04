import BlogCart from "./BlogCart";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function BlogPage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );
  const pageSize = 12;
  const [selectCategory, setSelectCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      if (selectCategory) {
        url = `http://localhost:5000/blogs?category=${selectCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [currentPage, selectCategory, pageSize]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem("currentPage", pageNumber);
  };

  const handleCategory = (category) => {
    setSelectCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <>
      {/* page category */}
      <div></div>
      <div>
        <BlogCart
          blogs={data}
          currentPage={currentPage}
          selectCategory={selectCategory}
          pageSize={pageSize}
        />
      </div>
      {/* pagination */}
      <div>
        <Pagination
          blogs={data}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default BlogPage;
