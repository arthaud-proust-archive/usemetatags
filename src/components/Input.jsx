import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.4rem;

    > input {
        font-size: 1.4rem;
        border: none;
        padding: 1rem;
        background: var(--b0);
        border: 2px solid var(--b2);
        max-width: 100%;
        min-width: 0;
        width: 100%;
        box-sizing: border-box;
    }
`;

export default function Input({value, name, label, placeholder, onChange}) {
    return (
        <InputContainer>
            <label>{ label }</label>
            <input value={value} onChange={event=>onChange(name, event.target.value)} name={name} placeholder={placeholder} type="text" />
        </InputContainer>
    );
}