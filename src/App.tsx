import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tailwindcss/tailwind.css";
import { MainPage } from "./components/MainPage";

export default function App() {
  return (
    <div className="p-5">
      <MainPage />
    </div>
  );
}
