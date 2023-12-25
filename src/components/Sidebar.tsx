import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";
import { Link } from "react-router-dom";

function Sidebar() {
  const [togglePermissions, setTogglePermissions] = useState<boolean>(false);
  const [toggleMaster, setToggleMaster] = useState<boolean>(false);

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to={"/about"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="ms-3">About</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard-admin"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="ms-3">Dashboard (Admin)</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="ecommerce-dropdown"
              data-collapse-toggle="ecommerce-dropdown"
              onClick={() => setToggleMaster(!toggleMaster)}
            >
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Master Data (Super Admin)
              </span>
              <ArrowDown />
            </button>
            <ul
              id="ecommerce-dropdown"
              className={`z-10 ${!toggleMaster && "hidden"} py-2 space-y-2`}
            >
              <li>
                <Link
                  to={"/companies"}
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  to={"/list-user"}
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Users
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={"/departments"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Departments</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/employees"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Employees</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/presences"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Presences</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/payrolls"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Payrolls</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="ecommerce-dropdown"
              data-collapse-toggle="ecommerce-dropdown"
              onClick={() => setTogglePermissions(!togglePermissions)}
            >
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Permissions (Super Admin)
              </span>
              <ArrowDown />
            </button>
            <ul
              id="ecommerce-dropdown"
              className={`z-10 ${
                !togglePermissions && "hidden"
              } py-2 space-y-2`}
            >
              <li>
                <Link
                  to={"/list-role"}
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Roles
                </Link>
              </li>
              <li>
                <Link
                  to={"/user-access"}
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  User Access
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
