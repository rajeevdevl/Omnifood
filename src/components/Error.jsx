import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>
        {error.status} {error.statusText}
      </h1>
      <h2>{error.data}</h2>
    </div>
  );
};

export default Error;
