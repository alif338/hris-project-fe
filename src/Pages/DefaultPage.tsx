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
    <div className="px-4">
      {/* Page Header */}
      <h1 className="text-4xl leading-relaxed border-b">
        Welcome to Workday App👋
      </h1>

      {/* Main section */}
      <div className="py-4">
        <p>Choose any menus at Sidebar left for begin</p>
        <p>{"<<<"}</p>
      </div>
    </div>
  );
}
