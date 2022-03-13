import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Input from './Input';
import Select from './Select';
import Btn from './Btn';
import { capitalizeStr } from '../services/utils/string';

const FormContainer = styled.div`
    overflow-x:auto;
    display: flex;
    flex-direction: column;
    padding: 2rem 0.2rem;
    margin-bottom: 1rem;
`

const TabNav = styled.div`
    display: flex;
    // margin-top: 8rem;
    margin-bottom: 1rem;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items:center;
    gap: 0.5rem;
    font-size: 1.4rem;
    color: var(--p2);
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--b3);

`

const TabNavBtn = styled.span`
    padding: 0.3rem 0.6rem;
    cursor: pointer;
    background: ${props=>props.active?'var(--p1)':'none'};
    color: ${props=>props.active?'var(--b1)':'var(--p2)'};

    &:hover {
        background: ${props=>props.active?'var(--p1)':'var(--b2)'};
        color: ${props=>props.active?'var(--b1)':'var(--p2)'};
    }
`

const TabTitle = styled.h2`
    margin: 0;
    font-size: 2.4rem;
`
const TabSubTitle = styled.p `
    margin: 0.2rem 0 3rem 0;
    font-size: 1.4rem;
    color: var(--p2);
`

const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Actions = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
`



export default function TabbedForm({tabs, onChange}) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [formData, setFormData] = useState({});

    useEffect(()=>{
        if(Object.keys(formData).length>0) return;
        let t = {};
        for(let tab of tabs) {
            for(let field of tab.fields) {
                t[`${tab.name}${capitalizeStr(field.name)}`] = ''
            }
        }
        setFormData(t);
    }, [])

    const currentTab = tabs[currentTabIndex];

    const handleFieldChange = (name, value)=>{
        setFormData({
            ...formData,
            [name]: value
        });
    }

    useEffect(()=>{
        onChange(formData)
    }, [formData]);

    const indexInRange = index=>0<=index&&index<tabs.length;
    const goToTab = index=>{
        if(indexInRange(index)) setCurrentTabIndex(index);
    }
    const nextTab = ()=>goToTab(currentTabIndex+1)
    const previousTab = ()=>goToTab(currentTabIndex-1)
    const submit = ()=>{
        console.log(formData);
    };

    return (
        <FormContainer>
            <TabNav>
                {
                    tabs
                        .map((tab, i)=>
                            <TabNavBtn key={i} onClick={()=>goToTab(i)} active={tab.title===currentTab.title}>{tab.shortTitle}</TabNavBtn>
                        )
                        // .reduce((accu, elem)=> {
                            // return accu === null ? [elem] : [...accu, <span>|</span>, elem]
                        // }, null)
                }
            </TabNav>
            <TabTitle>{currentTab.title}</TabTitle>
            <TabSubTitle>{currentTab.subtitle}</TabSubTitle>
            <FormContent>
                {
                    currentTab.fields.map((field,i)=>{
                        const {name, ...fieldData} = field;
                        const fieldName = `${currentTab.name}${capitalizeStr(name)}`;
                        return fieldData.options?
                            <Select key={fieldName} name={fieldName} value={formData[fieldName]||''} onChange={handleFieldChange} {...fieldData} />
                            :
                            <Input key={fieldName} name={fieldName} value={formData[fieldName]||''} onChange={handleFieldChange} {...fieldData} />
                    })
                } 

                <Actions>
                    { indexInRange(currentTabIndex-1) &&
                        <Btn action={previousTab} secondary content="Précédent" />
                    }
                    { indexInRange(currentTabIndex+1)?
                        <Btn action={nextTab} content={currentTab.actionTitle||'Continuer'} />
                        :
                        <Btn action={submit} content={currentTab.actionTitle||'Finir'} />
                    }
                </Actions>       
            </FormContent>
        </FormContainer>
    )
}