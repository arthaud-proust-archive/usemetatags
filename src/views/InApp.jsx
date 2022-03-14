import Header from '../components/Header'
import { useState } from 'react';
import styled from 'styled-components';
import TabbedForm from '../components/TabbedForm';

import { CodeBlock, anOldHope } from "react-code-blocks";


import getGeneratedHtml from '../services/utils/htmlMeta';
import appFormTabs from '../services/formsTabs/app';

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
    position: relative;
    width: 50%;
    height: 100vh;
    // overflow-x: auto;
    font-size: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    user-select: normal;
    > span {
        padding-left: 1.4rem;
        > code {
            padding-top: 2rem !important;
            > :last-child {
                padding-bottom: 2rem !important;
            }

            &:first-child {
                text-align: right;
                opacity: 0.5;
            }
        }
    }
`






export default function InApp() {
    const [generatedHtml, setGeneratedHtml] = useState(getGeneratedHtml({}));


    return (
        <StyledMain>
            <MainContent>
                <Header />
                <TabbedForm 
                    tabs={appFormTabs}
                    onChange={formData=>setGeneratedHtml(getGeneratedHtml(formData))}
                    formResult={generatedHtml}   
                />
            </MainContent>
            <RightPanelContainer>
                <CodeBlock
                    text={generatedHtml}
                    language="html"
                    showLineNumbers={true}
                    startingLineNumber={0}
                    theme={anOldHope}
                />
                <div className="bottom-spacer"></div>
            </RightPanelContainer>
        </StyledMain>
    )
}