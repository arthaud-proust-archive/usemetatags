import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.4rem;

    > input {
        font-size: 1.4rem;
        border: none;
        padding: 1rem;
        background: var(--b2);
        max-width: 100%;
        min-width: 0;
        width: 100%;
        box-sizing: border-box;
    }
`;


const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
    }),
    container: (provided) => ({
        ...provided,
        width: '100%'
    }),
    control: (provided) => ({
        ...provided,
        width: 'auto',
        borderRadius: 0,
        padding: '0.3rem'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
}

export default function Select({options, value, name, label, onChange}) {

    const parsedOptions = options.map(option=>{
        let op = option.split('|');
        let opValue = op[0];
        let opLabel = op.length>0?op[1]:op[0];
        return {
            value: opValue,
            label: opLabel,
        }
    })

    return (
        <InputContainer>
            <label>{ label }</label>
            <CreatableSelect 
                isClearable
                styles={customStyles}
                value={value}
                onChange={inputValue=>onChange(name, inputValue)} 
                name={name} 
                options={parsedOptions}
            />
        </InputContainer>
    );
}


// export default function Select({options, value, name, label, onChange}) {
//     return (
//         <InputContainer>
//             <label>{ label }</label>
//             <select value={value} onChange={event=>onChange(name, event.target.value)} name={name} >
//                 {
//                     options.map((option,i)=>{
//                         let op = option.split('|');
//                         let opValue = op[0];
//                         let opTxt = op.length>0?op[1]:op[0];
//                         return (<option key={`${i}-${opValue}`} selected={opValue===value} value={opValue}>{opTxt}</option>)
//                     })
//                 }
//             </select>
//         </InputContainer>
//     );
// }