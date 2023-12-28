import axios from "axios";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext, AuthContextProps } from "../contexts";

export default function DefaultPage() {
  const { authenticated } = useContext(AuthContext) as AuthContextProps;

  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    if (!token || !authenticated) {
      return;
    }

    axios
      .get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.code != 200) {
          throw new Error(response.data.message);
        }
        const responseData = response.data.data;

        localStorage.setItem("userid", responseData.userid);
        localStorage.setItem("fullname", responseData.fullname);
        localStorage.setItem("email", responseData.email);
        localStorage.setItem("rolename", responseData.role.rolename);
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  }, []);

  return (
    <div className="px-4 min-h-lvh">
      {/* Page Header */}
      <h1 className="text-4xl leading-relaxed border-b">
        Welcome to Workday App👋
      </h1>

      {/* Main section */}
      <div className="py-4">
        <p>Choose any menus at Sidebar left for begin</p>
        <p>{"<<<"}</p>
        <br />
        <h1 className="italic">TODO of App Features (By Role)</h1>
        <ol role="list" className="list-decimal list-inside">
          <li>
            Super Admin
            <ul role="list" className="list-disc list-inside">
              <li>Get List of Company (contains search and pagination) ✅</li>
              <li>Create new Company ❌</li>
              <li>Edit existing Company ❌</li>
              <li>Deleting Company ❌</li>
              <li>Get list of Users (contains search and pagination) ✅</li>
              <li>Add new User ❌</li>
              <li>Edit existing User ❌</li>
              <li>Deleting User ❌</li>
              <li>CRUD for Roles Type ❌</li>
              <li>Maintaining User access for each Role ❌</li>
            </ul>
          </li>
          <li>
            Admin
            <ul role="list" className="list-disc list-inside">
              <li>Get List of Department ❌</li>
              <li>CRUD Operation for Department data ❌</li>
              <li>Get List of Employees (Including Admin of Department) ❌</li>
              <li>CRUD Operation for Employees ❌</li>
              <li>
                Dashboard Management for Employee's Presences and Payrolls ❌
              </li>
            </ul>
            <span className="italic">
              Note: For new registered user (after filled Register Form) should
              be assigned an Admin of a new Company
            </span>
            ✅
          </li>
          <li>
            Admin Department
            <ul role="list" className="list-disc list-inside">
              <li>Management Employees (based on their department) ❌</li>
              <li>CRUD operation for Employee's Presences ❌</li>
              <li>CRUD operation for Employee's Payrolls ❌</li>
            </ul>
          </li>
          <li>
            Employee
            <ul role="list" className="list-disc list-inside">
              <li>List of their presences ❌</li>
              <li>Assign their presences ❌</li>
              <li>Edit their profile ❌</li>
              <li>List of their payrolls ❌</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
