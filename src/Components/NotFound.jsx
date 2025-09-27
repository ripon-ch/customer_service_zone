import React from "react"
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const location = useLocation();
  useEffect(() => {
    console.error("404 route:", location.pathname);
  }, [location.pathname]);
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="mt-2 text-neutral-500">Page not found</p>
        <Link to="/" className="mt-4 inline-block rounded-md bg-gradient-to-tr from-brand-start via-brand-mid to-brand-end px-4 py-2 text-white font-semibold">Go Home</Link>
      </div>
    </div>
  );
}
