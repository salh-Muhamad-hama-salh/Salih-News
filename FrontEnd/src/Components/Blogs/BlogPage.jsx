import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

function BlogPage() {
  const { data, isLoading, error } = useQuery("blog", async () => {
    const response = await fetch("http://localhost:5000/blogs");
    const data = await response.json();
    return data;
  });

  if (isLoading) return <Loading />;
  if (error) return <h1>Error...</h1>;

  return (
    <div>
      {data?.map((blog, index) => {
        return (
          <div key={index}>
            <div className="py-20 px-4">
              <h1 className="text-4xl font-bold">{blog.title}</h1>
              <p className="text-gray-500">{blog.content}</p>
              <img src={blog.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogPage;
