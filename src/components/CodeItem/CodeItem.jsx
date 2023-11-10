import hljs from 'highlight.js';
import { useEffect, useRef } from 'react';
import styleClasses from './CodeItem.module.css'

function CodeItem(props) {
    const { value, language, onClick } = props
    const codeBlockRef = useRef(null);

    useEffect(() => {
        hljs.highlightBlock(codeBlockRef.current);
    }, [codeBlockRef]);

    const hljsClassName = `language-${language}`
    return (
        <code
            ref={codeBlockRef}
            className={[hljsClassName, styleClasses.code].join(' ')}
            onClick={onClick}
        
        >
            {value}
        </code>
    )
}

export default CodeItem;
