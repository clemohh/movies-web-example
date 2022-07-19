import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div className="home">
      <header className="bg-white shadow"></header>
      <main>
        <div className="max-w-7xl mx-auto py-3 sm:px-6 lg:px-1">
          {/* <!-- Replace with your content --> */}
          <div className="px-1 py-1 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-90">
              <div className="home-container">
                <div className="left-h">
                  <h1> Top Ten Movies in 2022</h1>
                  <ul>
                    <li>
                      <Link to="action" spy={true} smooth={true}>
                        Action
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="drama" spy={true} smooth={true}>
                        Drama
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>Sci-fi</li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="comedy" spy={true} smooth={true}>
                        Comedy
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="horror" spy={true} smooth={true}>
                        Horror
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="hollywood" spy={true} smooth={true}>
                        HollyWood Movies
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="right-h">
                  <h1>Top Ten Sereis in 2022</h1>
                  <ul>
                    <li>Action</li>
                  </ul>
                  <ul>
                    <li>Drama</li>
                  </ul>
                  <ul>
                    <li>Sci-fi</li>
                  </ul>
                  <ul>
                    <li>Comedy</li>
                  </ul>
                  <ul>
                    <li>Horror</li>
                  </ul>
                  <ul>
                    <li>HollyWood</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
