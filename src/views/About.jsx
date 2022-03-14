import Header from '../components/Header'
import styled from 'styled-components';
import BtnLink from '../components/BtnLink';
import RandomWords from '../components/RandomWords';

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
    overflow: visible auto;
    width: 100%;
    height: 100%;
`

const MainContent = styled.div`
    width: var(--leftPanelWComputed);
    display: flex;
    margin-left: auto;
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

export default function Home() {
    return (
        <StyledMain>
            <MainContent>
                <Header />
                <Scrollable>
                    <StyledH1>À <span>propos</span></StyledH1>
                    <StyledH2>Les meta-tags</StyledH2>
                    <StyledP>Ce sont des <b>balises html</b> contenant des informations à destination des navigateurs et des robots d'indexation.</StyledP>
                    <StyledH2>À qui s'adresse le site?</StyledH2>
                    <StyledP>Cet outils est destiné aux développeurs qui souhaitent générer des meta-tags rapidement ou simplement obtenir un modèle.</StyledP>
                    <StyledH2>Pourquoi avoir créé cet outil?</StyledH2>
                    <StyledP>
                        <ul>
                            <li>Progresser en React</li>
                            <li>Travailler l'accessibilité</li>
                            <li>Permettre d'avoir une base concrète pour les meta-tags plutôt que de fouiller mes anciens projets pour copier coller.</li>
                        </ul>
                    </StyledP>
                    <StyledP>Développé par <a className='link' href="https://arthaudproust.fr">Arthaud Proust</a></StyledP>
                </Scrollable>
            </MainContent>
            <LettersContainer>
                <RandomWords/>
            </LettersContainer>
        </StyledMain>
    )
}