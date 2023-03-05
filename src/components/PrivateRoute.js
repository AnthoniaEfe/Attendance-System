import { useAuth } from "../context/AuthContext";
import { Redirect, Route, Link } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  // return (
  //   <Route>
  //     {...rest}
  //     render ={" "}
  //     {(props) => {
  //       return currentUser ? <Component {...props} /> : <Redirect to="/" />;
  //     }}
  //   </Route>
  // );

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Link to={"/"} />
      }
    />
  );
}
