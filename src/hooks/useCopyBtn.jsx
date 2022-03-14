import {useState} from 'react';
import Btn from '../components/Btn';

export default function useCopyBtn({contentToCopy, timeOut}) {
    const [isCopied, setIsCopied] = useState(false);

    const copyContent = ()=>{
        navigator.permissions.query({name: "clipboard-write"}).then(result => {
            if (result.state == "granted" || result.state == "prompt") {
                navigator.clipboard.writeText(contentToCopy).then(function() {
                    setIsCopied(true);
                    if(timeOut) {
                        setTimeout(()=>setIsCopied(false), timeOut);
                    }
                }, function() {
                    setIsCopied(false);
                });
            }
        });
    };


    const CopyBtn = ({content, ...props}) => {
        var contentToShow = isCopied?'Copié!':content;
        return <Btn action={()=>copyContent()} content={contentToShow} {...props} />;
    }

    return {
        copyContent, 
        CopyBtn
    }
}