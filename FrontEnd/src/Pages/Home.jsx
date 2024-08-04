import Banner from "../Components/Home/Banner";
import BlogPage from "../Components/Blogs/BlogPage";

function Home() {
  return (
    <div>
      <Banner />

      <div className="max-w-7xl mx-auto ">
        <BlogPage />
      </div>
    </div>
  );
}

export default Home;
