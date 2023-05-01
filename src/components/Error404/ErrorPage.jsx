/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import erroimg from "../../../src/assets/images/404-page.avif";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="d-flex align-items-center p-5 mt-5">
      <div className="container d-flex flex-column align-items-center justify-content-center px-5 mx-auto my-8">
        <div className="text-center">
          <h2 className="mb-8 fw-bold display-1 text-warning">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <img src={erroimg} alt="Error image" className="img-fluid w-50" />
          <p className="fs-3 mt-3 fw-semibold  text-danger mb-5">
            {error?.message}
          </p>
          <Link to="/" className="btn bg-warning-subtle">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
