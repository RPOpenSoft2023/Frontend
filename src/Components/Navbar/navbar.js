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
        <div>
          <a href="#">
            OPENSOFT
          </a>
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
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
                {!matches ? <p>Home</p>:<i class='bx bx-home-alt-2 bx-sm'></i>}
              </a>
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
              {!matches ? <p>Add</p>:<i class='bx bx-plus-circle bx-sm' ></i>}
              </a>
            </li>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <li>
                <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
              {!matches ? <p>Profile</p>:<i class='bx bx-user bx-sm' ></i>}
                </a>
              </li>
            </Dropdown>
            <li>
              <a
                class="md:p-4 py-2 block hover:text-purple-400"
                href="#"
                >
                  {!matches ? <p>Logout</p>:<i class='bx bx-log-out-circle bx-sm' ></i>}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
