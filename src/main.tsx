import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Swal from "sweetalert2";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // const token: string | null = localStorage.getItem("token");
    // if (!token) {
    //   console.log("token not exist")
    //   return Promise.reject(error);
    // }

    let message: string = error.response.data.message;
    let code: number = error.response.data.code;

    if (
      typeof message === "string" &&
      message.toLowerCase() === "token invalid or token expired" &&
      code === 401
    ) {
      localStorage.clear();

      setTimeout(() => {
        window.location.reload();
      }, 1000);

      message = "Token Expired, sesi anda telah habis. Silahkan login kembali.";
      Swal.fire("Session Habis", message, "error");
    } 

    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
