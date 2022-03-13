import Header from '../components/Header'
import { useState } from 'react';
import styled from 'styled-components';
import TabbedForm from '../components/TabbedForm';

import Highlight from 'react-highlight';
import { CodeBlock, dracula } from "react-code-blocks";

import getGeneratedHtml from '../services/utils/htmlMeta';
import appFormTabs from '../services/formsTabs/app';
import '../assets/dark.css';

const StyledMain = styled.main`
    display: flex;
    flex-direction: row;
    // gap: var(--containerGap);
`

const MainContent = styled.div`
    width: 50%;
    box-sizing: border-box;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    // align-items:flex-start;
`

const RightPanelContainer = styled.div`
    // width: var(--rightPanelWComputed);
    width: 50%;
    height: 100vh;
    overflow-x: auto;
    font-size: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    user-select: normal;
    > pre {
        margin: 0 !important;
        > code {
            padding-top: 2rem;
            padding-left: 1.4rem;
            padding-bottom: 2rem;
        }
    }
`






export default function InApp() {
    const [generatedHtml, setGeneratedHtml] = useState(getGeneratedHtml({}));


    console.log(generatedHtml);
    return (
        <StyledMain>
            <MainContent>
                <Header />
                <TabbedForm 
                    tabs={appFormTabs}
                    onChange={formData=>setGeneratedHtml(getGeneratedHtml(formData))}
                />
            </MainContent>
            <RightPanelContainer>
                {/* <Highlight className='html'>
                    {generatedHtml}
                </Highlight> */}
                <CodeBlock
                    text={generatedHtml}
                    language="html"
                    showLineNumbers={true}
                    startingLineNumber={0}
                    theme={dracula}
                />
            </RightPanelContainer>
        </StyledMain>
    )
}