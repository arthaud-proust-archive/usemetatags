import {
    Link,
} from "react-router-dom";
import useIsRoute from "../hooks/useIsRoute";
  
export default function ActivableLink({children, to, ...props}) {
    const isRoute = useIsRoute(to);

    return (
        <Link
            style={{ textDecoration: isRoute ? "underline solid var(--linkBorderHeight) var(--a1)" : "none" }}
            to={to}
            tabIndex={ isRoute?'-1':'auto'}
            {...props}
        >
          {children}
        </Link>
    );
}

