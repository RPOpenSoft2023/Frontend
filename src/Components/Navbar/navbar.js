import { React, useState, useEffect } from "react";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
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
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to=""
        >
          1st menu item
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to=""
        >
          2nd menu item
        </Link>
      ),
    },
  ];

  return (
    <div>
      <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          py-4
        sm:py-0
          px-4
          text-xl text-gray-700
          font-bold
          bg-gray-300
          z-10
          bg-gradient-to-r from-cyan-500 to-blue-500
        "
      >
        <div className="font-['Lora']">
          <Link to="/">
            RedShift
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            document.querySelector("#menu").classList.toggle("hidden");
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link class="md:p-4 py-2 block hover:text-purple-400" to="/">
                {!matches ? <p>Home</p>:<i class='bx bx-home-alt-2 bx-sm'></i>}
              </Link>
            </li>
            <li>
              <Link class="md:p-4 py-2 block hover:text-purple-400" to="/">
              {!matches ? <p>Add</p>:<i class='bx bx-plus-circle bx-sm' ></i>}
              </Link>
            </li>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <li>
                <Link class="md:p-4 py-2 block hover:text-purple-400" to="/">
              {!matches ? <p>Profile</p>:<i class='bx bx-user bx-sm' ></i>}
                </Link>
              </li>
            </Dropdown>
            <li>
              <Link
                class="md:p-4 py-2 block hover:text-purple-400"
                to="/"
                >
                  {!matches ? <p>Logout</p>:<i class='bx bx-log-out-circle bx-sm' ></i>}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
