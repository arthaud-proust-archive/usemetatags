import { shuffleArray } from '../services/utils/array';


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

export default function RandomWords() {
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

    
    return lines.map((line,i)=><span key={i}>{line.join(' ')}</span>);
}