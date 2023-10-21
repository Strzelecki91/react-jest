import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <h2>404</h2>
      <p>Page not found!</p>
      <p>The page you trying to reach does not exist, or has been moved.</p>
      <Link to="/">Do strony głównej</Link>
    </>
  );
};
