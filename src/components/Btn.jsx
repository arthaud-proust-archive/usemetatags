import styled from 'styled-components';

const StyledBtn = styled.button`
    background: ${props=>props.secondary?'none':'var(--p1)'};
    color: ${props=>props.secondary?'var(--p1)':'var(--b1)'};
    cursor: pointer;
    
    border: none;
    padding: ${props=>props.small?'0.6rem 1rem':'1rem 3rem'};
    text-decoration: none;
    
    font-size: 1.4rem;
`

export default function Btn({children, content, action, ...props}) {
    const txt = children || content;

    return (
        <StyledBtn onClick={action} {...props}>
            {txt}
        </StyledBtn>
    );
}
