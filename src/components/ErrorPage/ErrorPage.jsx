import { Link, useRouteError } from "react-router-dom";
import page from "../../assets/404-page/page-not-found.svg";

const ErrorPage = () => {
  const { error, state } = useRouteError();
  console.log(error);

  return (
    <>
      <article className="flex flex-col lg:flex-row  h-screen items-center justify-center gap-5">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">Oops!</h1>
          <h3 className="text-3xl font-semibold">
            <span>Error</span> {state || 404}
          </h3>
          <p className="text-xl font-medium text-red-600">{error?.message}</p>
          <p className="text-lg font-normal">
            Sorry, an unexpected error has occurred.
          </p>

          <Link className="btn" to="/">
            Go Back To Home
          </Link>
        </div>
        <div className="h-full">
          <img className="h-full w-full" src={page} alt="404 page" />
        </div>
      </article>
    </>
  );
};

export default ErrorPage;
