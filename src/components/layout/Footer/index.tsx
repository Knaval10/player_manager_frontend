import { Link } from "react-router-dom";
import { navData } from "../../../constants/navData";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">FootballManager</h3>
              <p className="text-gray-400">
                Streamlining football management for<br/> teams worldwide.
              </p>
            </div>
            {/* <div className="">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navData.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="hover:text-blue-400">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="facebook.com" className="hover:text-blue-400">
                  Facebook
                </a>
                <a href="x.com" className="hover:text-blue-400">
                  Twitter
                </a>
                <a href="instagram.com" className="hover:text-blue-400">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} FootballManager. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
