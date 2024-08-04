import { FaUser } from "react-icons/fa";

function BlogCart({ blogs, currentPage, selectCategory, pageSize }) {
  const filteredBlogs = blogs
    .filter((blog) => !selectCategory || blog.category === selectCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  console.log(filteredBlogs);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <div key={index}>
            <div className="p-5 shadow-lg rounded cursor-auto">
              <img src={blog.image} alt="" className="w-full" />
              <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
                {blog.title}
              </h3>
              <p className="mb-2 text-gray-400  ">
                <FaUser className="inline-flex items-center mr-2" />
                {blog.author}
              </p>
              <p className="text-sm text-gray-500">
                Published : {blog.published_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogCart;

{
  /*  */
}
