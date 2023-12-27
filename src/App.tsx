import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DefaultPage from "./Pages/DefaultPage";
import AboutPage from "./Pages/AboutPage";
import DashboardAdminPage from "./Pages/DashboardAdminPage";
import CompaniesPage from "./Pages/CompaniesPage";
import DepartmentsPage from "./Pages/DepartmentsPage";
import ListUserPage from "./Pages/ListUserPage";
import EmployeesPage from "./Pages/EmployeesPage";
import PresencesPage from "./Pages/PresencesPage";
import PayrollsPage from "./Pages/PayrollsPage";
import ListRolePage from "./Pages/ListRolePage";
import UserAccessPage from "./Pages/UserAccessPage";
import NotFound from "./Pages/404";
import { AuthContext } from "./contexts";
import { useEffect, useState } from "react";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(true);

  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    const rolecode: string | null = localStorage.getItem("rolecode");

    if (!token || !rolecode) {
      setAuthenticated(false);
      return;
    }
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {!authenticated ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      ) : (
        <>
          <Navbar />

          <Sidebar />

          <div className="p-4 sm:ml-64 bg-gray-900">
            <div className="px-4 h-lvh mt-14 dark:text-white">
              <Routes>
                <Route path="/" element={<DefaultPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="/dashboard-admin"
                  element={<DashboardAdminPage />}
                />
                <Route path="/companies" element={<CompaniesPage />} />
                <Route path="/departments" element={<DepartmentsPage />} />
                <Route path="/list-user" element={<ListUserPage />} />
                <Route path="/employees" element={<EmployeesPage />} />
                <Route path="/presences" element={<PresencesPage />} />
                <Route path="/payrolls" element={<PayrollsPage />} />
                <Route path="/list-role" element={<ListRolePage />} />
                <Route path="/user-access" element={<UserAccessPage />} />
                <Route path="/*" element={<NotFound />} />c
              </Routes>
            </div>
          </div>
        </>
      )}
    </AuthContext.Provider>
  );
}

export default App;
