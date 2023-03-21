import { React, useState, useEffect } from "react";
import { Dropdown } from "antd";
function Navbar() {
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
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
          w-full
          py-4
        sm:py-0
          px-4
          text-xl text-gray-700
          font-bold
          bg-gray-300
          bg-gradient-to-r from-cyan-500 to-blue-500
        "
      >
        <div>
          <a href="/home">
            OPENSOFT
          </a>
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

        <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="/home">
                {!matches ? <p>Home</p>:<i className='bx bx-home-alt-2 bx-sm'></i>}
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              {!matches ? <p>Add</p>:<i className='bx bx-plus-circle bx-sm' ></i>}
              </a>
            </li>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              {!matches ? <p>Profile</p>:<i className='bx bx-user bx-sm' ></i>}
                </a>
              </li>
            </Dropdown>
            <li>
              <a
                className="md:p-4 py-2 block hover:text-purple-400"
                href="/login"
                >
                  {!matches ? <p>Logout</p>:<i className='bx bx-log-out-circle bx-sm' ></i>}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
