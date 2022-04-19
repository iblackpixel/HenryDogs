import React from "react";
import Footer from "../components/NavBar/Footer";
import NavBar from "../components/NavBar/NavBar";
import Paginado from "../components/NavBar/Paginado";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Paginado />
      <Footer />
    </div>
  );
}
