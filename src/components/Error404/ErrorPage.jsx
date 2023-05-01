/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-column align-items-center justify-content-center px-5 mx-auto my-8">
        <div className="text-center">
          <h2 className="mb-8 fw-bold display-1 text-warning">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
