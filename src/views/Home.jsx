import Header from '../components/Header'
import styled from 'styled-components';
import { shuffleArray } from '../services/utils/array';
import BtnLink from '../components/BtnLink';

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




const MainContent = styled.div`
    width: var(--leftPanelWComputed);
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    max-height: 100vh;
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

var words = [
    'title', 'charset', 'og', 
    'image', 'canonical', 'url', 
    'target', 'subject', 'description', 
    'theme-color', 'type', 'card', 
    'seo', 'img', 'twitter',
    'link', 'rel', 'href', 'http-equiv', 
    'lang', 'author', 'viewport', 
    'locale', 'shortcut icon',
    'creator', 'itemprop'
];


export default function Home() {

    shuffleArray(words);

    const nbLines = 6;
    const lines = [];
    for(let i=0; i<nbLines; i++) {
        lines[i] = [];
    }
    
    for(let i=0; i<words.length; i++) {
        lines[i%nbLines].push(
            words[i]
        );
    }

    return (
        <StyledMain>
            <MainContent>
                <Header />
                <StyledH1>Use <span>metatags</span></StyledH1>
                <StyledH2>Créez simplement vos balises Meta</StyledH2>
                <StyledP>Entrez les informations de votre site et récupérez le code html</StyledP>
                <BtnLink to="/app" content="Commencer" />
            </MainContent>
            <LettersContainer>
                {
                    lines.map((line,i)=><span key={i}>{line.join(' ')}</span>)
                }
            </LettersContainer>
        </StyledMain>
    )
}