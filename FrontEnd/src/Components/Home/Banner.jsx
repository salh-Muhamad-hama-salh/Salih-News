import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Banner() {
  return (
    <div className="px-4 py-32 bg-black mx-auto text-white">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to Ouer Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic
          quo modi eius illo nobis itaque nemo possimus commodi, eaque et natus
          accusantium minima consequatur. Molestiae earum ipsum similique.
        </p>
        <div>
          <Link
            to="/"
            className="font-medium hover:text-orange-500 inl    ine-flex items-center py-1"
          >
            Learn More <FaArrowRightLong className="mt-1 ml-2 text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
