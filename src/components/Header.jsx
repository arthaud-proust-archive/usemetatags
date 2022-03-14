import TextLogo from './TextLogo'
import useIsRoute from "../hooks/useIsRoute";
import ActivableLink from './ActivableLink';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding: 2rem 0;
`

const StyledActivableLink = styled(ActivableLink)`
    font-size: 2rem;
    font-family: 'Fredericka the Great', cursive;
    color: var(--p1);
    &:hover {
        text-decoration: underline solid var(--linkBorderHeight) var(--a1) !important;
        // text-decoration: underline var(--p1) 3px !important;
    }
`

export default function Header() {
    const isInApp = useIsRoute('/app');

    return (
        <StyledNav>
            <StyledActivableLink to="/">
                <TextLogo condensed={isInApp}/>
            </StyledActivableLink>
            {
                !isInApp && <>
                    <StyledActivableLink to="/app">Commencer</StyledActivableLink>
                    <StyledActivableLink to="/about">À propos</StyledActivableLink>
                </>
            }
        </StyledNav>
    )
}