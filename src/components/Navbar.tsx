import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/app.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextProps } from "../contexts";
import axios from "axios";
import Swal from "sweetalert2";

function Navbar(): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false);
  const { setAuthenticated } = useContext(AuthContext) as AuthContextProps;
  const rolecode: string | null = localStorage.getItem("rolecode");
  const rolename: string | null = localStorage.getItem("rolename");
  const fullname: string | null = localStorage.getItem("fullname");
  const email: string | null = localStorage.getItem("email");

  const navigate = useNavigate();

  useEffect(() => {
    if (!rolecode || !rolename || !fullname || !email) {
      setAuthenticated(false);
    }
  }, []);

  // const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
  //   event.preventDefault();
  //   console.log(event.target);
  //   if (event.currentTarget === event.target) {
  //     setToggle(false);
  //   }
  //   setTimeout(() => {}, 100);
  // };

  const handleLogout = (e: React.MouseEvent<HTMLLIElement>) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    axios
      .post("/api/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.status != 200) {
          throw new Error(response.data.message);
        }
        setAuthenticated(false);
        localStorage.clear();
        navigate("/", { replace: true });
        Swal.fire("Logout Success", response.data.message, "success");
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
        return;
      });
  };

  const BadgeGen = () => {
    switch (rolecode) {
      case "superadmin":
        return (
          <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
            {rolename}
          </span>
        );
      case "admin":
        return (
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
            {rolename}
          </span>
        );
      case "admin_dept":
        return (
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {rolename}
          </span>
        );
      case "employee":
        return (
          <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            {rolename}
          </span>
        );
      default:
        return (
          <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Unknown
          </span>
        );
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link to={"/"} replace={true} className="flex ms-2 md:me-12">
              <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Workday
              </span>
            </Link>
            <BadgeGen />
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                  onClick={(): void => setToggle(!toggle)}
                  // onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
                  //   dismissHandler(e)
                  // }
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              <div
                className={`z-50 ${
                  !toggle && "hidden"
                } my-4 text-base list-none absolute right-4 top-9 bg-white divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    {fullname}
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    {email}
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li
                    onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                      handleLogout(e)
                    }
                  >
                    <a
                      href=""
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
