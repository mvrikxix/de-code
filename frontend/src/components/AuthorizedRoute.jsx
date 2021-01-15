import { navigate } from "@reach/router";
import { useEffect } from "react";

export default function AuthorizedRoute({ component, ...rest }) {
  const isAuthenticated = true;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/access");
    }
  }, [isAuthenticated]);

  const Component = component;
  return isAuthenticated ? <Component {...rest} /> : <div />;
}
