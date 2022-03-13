import {
    useMatch,
    useResolvedPath,
} from "react-router-dom";

export default function useIsRoute(to) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return match;
}