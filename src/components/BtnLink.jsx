import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledRunAppBtn = styled(Link) `
    background: var(--p1);
    color: var(--b1);

    padding: 1rem 3rem;
    text-decoration: none;
    
    font-size: 1.4rem;
`

export default function BtnLink(props) {
    const txt = props.children || props.content;

    return (
        <StyledRunAppBtn to={props.to}>
            {txt}
        </StyledRunAppBtn>
    );
}
