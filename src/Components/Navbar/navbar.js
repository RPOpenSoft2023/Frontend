import { React, useState, useEffect } from "react";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import Join from "../join";
import { showToastMessage } from "../Toast";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    showToastMessage("Logged Out Successfully");
  };
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const items = [
    {
      key: "1",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="">
          User Name
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="">
          User Number
        </Link>
      ),
    },
  ];

  return (
    <div>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          py-4
        sm:py-0
          px-4
          text-xl text-white
          font-bold
          z-10
          bg-blue-600 
       
        "
      >
        <div className=" text-2xl tracking-wide font-['Kanit']">
<<<<<<< HEAD
          <Link to="/dashboard">RedShift</Link>
=======
          <Link>RedShift</Link>
>>>>>>> 7e8d15ff351a55918f0d8c13533c2d7987af522d
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            document.querySelector("#menu").classList.toggle("hidden");
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto mt-1"
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link
                className="md:p-4 py-2 block text-white hover:text-purple-400 font-mono"
                to="/dashboard"
              >
                {!matches ? (
                  <p>Home</p>
                ) : (
                  <i className="bx bx-home-alt-2 bx-sm text-white"></i>
                )}
              </Link>
            </li>
            <Join matches={matches} />
            {localStorage.getItem("logstat") === "true" ?
              <>

                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                  <li>
                    <Link
                      className="md:p-4 py-2 block text-white hover:text-purple-400 font-mono"
                      to="/"
                    >
                      {!matches ? (
                        <p>Profile</p>
                      ) : (
                        <i className="bx bx-user bx-sm text-white"></i>
                      )}
                    </Link>
                  </li>
                </Dropdown>
                <li
                  onClick={() => {
                    logout();
                  }}
                >
                  <Link
                    className="md:p-4 py-2 block text-white hover:text-purple-400 font-mono"
                    to="/"
                  >
                    {!matches ? (
                      <p>Logout</p>
                    ) : (
                      <i className="bx bx-log-out-circle bx-sm text-white"></i>
                    )}
                  </Link>
                </li>
              </> : <></>
            }

          </ul>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
