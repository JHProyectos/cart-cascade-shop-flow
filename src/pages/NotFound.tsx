
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={0} />
      <main className="flex-grow flex items-center justify-center bg-shop-lightGray">
        <div className="text-center px-4 py-20">
          <h1 className="text-6xl font-bold mb-4 text-shop-coral">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            ¡Ups! No pudimos encontrar la página que estás buscando
          </p>
          <p className="text-gray-500 mb-8">
            Es posible que la página haya sido movida, eliminada o nunca haya existido.
          </p>
          <Button
            asChild
            className="bg-shop-coral hover:bg-shop-coral/90"
          >
            <Link to="/">
              Volver al Inicio
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
