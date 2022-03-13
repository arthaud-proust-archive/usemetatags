import {
    Link,
} from "react-router-dom";
import useIsRoute from "../hooks/useIsRoute";
  
export default function ActivableLink({children, to, ...props}) {
    const isRoute = useIsRoute(to);

    return (
        <Link
            style={{ textDecoration: isRoute ? "underline dashed var(--p1) 2px" : "none" }}
            to={to}
            {...props}
        >
          {children}
        </Link>
    );
}

