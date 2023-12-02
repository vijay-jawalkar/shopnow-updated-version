import React from "react";
import { BrowserRouter } from "react-router-dom";



import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer, ScrollToTop } from "./components/index";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

        <Header />
        <AllRoutes />
        <Footer />
   
    </BrowserRouter>
  );
}
