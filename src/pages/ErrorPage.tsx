import { useRouteError } from "react-router-dom";

interface ErrorResponse {
  data: string;
  error: {
    message: string;
    stack: string;
  };
  status: number;
  statusText: string;
  message: string;
}

function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
