// import { useQuery } from "react-query";
// import Loading from "../Loading/Loading";
import BlogCart from "./BlogCart";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function BlogPage() {
  // const { data, isLoading, error } = useQuery("blog", async () => {
  //   const response = await fetch("http://localhost:5000/blogs");
  //   const data = await response.json();
  //   return data;
  // });

  // if (isLoading) return <Loading />;
  // if (error) return <h1>Error...</h1>;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectCategory, setSelectCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fechdata() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      if (selectCategory) {
        url = `http://localhost:5000/blogs?category=${selectCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    fechdata();
  }, [currentPage, selectCategory, pageSize]);

  const handlePagechabge = (pageNumber) => {
    setCurrentPage(pageNumber);
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
        {/* {data?.map((blog, index) => {
          return (
            <div key={index}>
              <BlogCart blog={blog} />
            </div>
          );
        })} */}
      </div>
      {/* pagination */}
      <div>
        <Pagination
          blogs={data}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePagechabge}
        />
      </div>
    </>
  );
}

export default BlogPage;

{
  /* import BlogCart from "./BlogCart";
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

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategory = (category) => {
    setSelectCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <>
      {/* page category */
}
//       <div></div>
//       <div>
//         <BlogCart
//           blogs={data}
//           currentPage={currentPage}
//           selectCategory={selectCategory}
//           pageSize={pageSize}
//         />
//       </div>
//       {/* pagination */}
//       <div>
//         <Pagination
//           blogs={data}
//           currentPage={currentPage}
//           pageSize={pageSize}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </>
//   );
// }

// export default BlogPage; */}
