import styled from 'styled-components';
import Header from '../components/Header'
import BtnLink from '../components/BtnLink';
import RandomWords from '../components/RandomWords';

import useMetaProfile from '../hooks/useMetaProfile';
import { useEffect } from 'react';


const StyledMain = styled.main`
    display: flex;
    flex-direction: row;
    gap: var(--containerGap);
`

const StyledH1 = styled.h1`
    font-family: 'Fredericka the Great', cursive;
    font-size: 7rem;
    font-weight: 200;
    color: var(--p1);
    margin-top: 5rem;
    margin-bottom: 2rem;

    > span {
        color: var(--a1);
    }
`

const StyledH2 = styled.h2`
    font-size: 2.4rem;
    margin: 0;
`
const StyledP = styled.p `
    margin: 0.2rem 0 3rem 0;
    font-size: 1.4rem;
    color: var(--p2);
`


const Scrollable = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: visible auto;
    width: 100%;
    height: 100%;
`

const MainContent = styled.div`
    width: var(--leftPanelWComputed);
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    max-height: 100vh;
`

const SavedProfiles = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding-bottom: 1rem;
`

const LettersContainer = styled.div`
    width: var(--rightPanelWComputed);
    font-size: 7rem;
    text-overflow: clip;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    font-family: 'Fredericka the Great', cursive;
    user-select: none;
`

export default function Home() {
    const {getProfiles, saveProfile} = useMetaProfile();

    useEffect(()=>{
        saveProfile({
            id: 'test',
            data: {}
        })
    }, []);
    
    return (
        <StyledMain>
            <MainContent>
                <Header />
                <Scrollable>
                    <StyledH1>Use <span>metatags</span></StyledH1>
                    <StyledH2>Créez simplement vos balises Meta</StyledH2>
                    <StyledP>Entrez les informations de votre site et récupérez le code html</StyledP>
                    <BtnLink to="/app" content="Commencer" />
                </Scrollable>
            </MainContent>
            <LettersContainer>
                <RandomWords/>
            </LettersContainer>
        </StyledMain>
    )
}