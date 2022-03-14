import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-family: 'Fredericka the Great', cursive;
    font-weight: 200;
    font-size: 2rem;
    margin: 0;
    text-decoration: none;
    color: var(--p1);
`

const StyledBlueSpan = styled.span`
    color: var(--a2)
`

export default function TextLogo({condensed}) {
    const parts = condensed ? ['Use', 'Metatags'] : ['U', 'm'];
    return (
        <StyledH3>
            {parts[0]}
            <StyledBlueSpan>{parts[1]}</StyledBlueSpan>
        </StyledH3> 
    )
}