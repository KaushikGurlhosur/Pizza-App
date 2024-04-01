import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  // const navigate = useNavigate();
  const error = useRouteError();
  // ErrorResponseImpl {status: 404, statusText: 'Not Found', internal: true, data: 'Error: No route matches URL "/menu/d"', error: Error: No route matches URL "/menu/d"
  //   at getInternalRouterError (http://localhost:5173/node_mo}
  // console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>
      <p>{error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
      {/* <button onClick={() => navigate(-1)}>&larr; Go back</button> */}
    </div>
  );
}

export default NotFound;
