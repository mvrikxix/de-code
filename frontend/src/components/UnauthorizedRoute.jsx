import { useEffect } from "react";
import { navigate } from "@reach/router";

export default function UnauthorizedRoute({ component, ...rest }) {
  const isAuthenticated = false;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/game");
    }
  }, [isAuthenticated]);

  const Component = component;
  return isAuthenticated ? <div /> : <Component {...rest} />;
}
