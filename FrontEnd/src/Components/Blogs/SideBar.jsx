import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function SideBar() {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/blogs?popular=true");
      const data = await response.json();
      setPopularBlogs(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Letest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5  border-b-2 border-spacing-2 px-4"
            >
              <h4 className="mb-2 font-medium">{blog.title}</h4>
              <Link
                to="/"
                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Learn More <FaArrowRightLong className="mt-1 ml-2 text-xl" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Populer Blogs</h3>
        <div className="mt-20">
          {popularBlogs.slice(6, 10).map((blog) => (
            <div
              key={blog.id}
              className="my-5  border-b-2 border-spacing-2 px-4"
            >
              <h4 className="mb-2 font-medium">{blog.title}</h4>
              <Link
                to="/"
                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Learn More <FaArrowRightLong className="mt-1 ml-2 text-xl" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
