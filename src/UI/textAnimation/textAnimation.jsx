import React, { useState, useEffect } from 'react';
// import cl from './textAnimation.module.css'

const TextAnimation = ({ children }) => {
    const [text, setText] = useState('');
    const [visible, setVisible] = useState(true);


    useEffect(() => {
        let currentIndex = 0;
        const id = setInterval(() => {
            currentIndex += 1;
            setText(children.substring(0, currentIndex));
            if (currentIndex === children.length) {
                clearInterval(id);
            }
        }, 40);

        return () => clearInterval(id);
    }, []);
    if (!visible) {
        return null;
    }
    return (
        <div
            onClick={() => setVisible(false)}
            className={cl.container}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={cl.typewriter}
            >
                <p className={cl.typewriterText}>{text}</p>
                <button>Продолжить просмотр</button>
            </div>
        </div>
        //modal свою вставиить
    );
};

export default TextAnimation;























// const TextAnimation = ({ children }) => {
//     const [text, setText] = useState('');



//     useEffect(() => {
//         if (!children) return;

//         let i = 0;
//         const typingInterval = setInterval(() => {
//             if (i < children.length) {
//                 setText((prev) => prev + children.charAt(i));
//                 i++;
//             } else {
//                 clearInterval(typingInterval);
//             }
//         }, 70);

//         return () => clearInterval(typingInterval);
//     }, [children]);
//
// };

// export default TextAnimation;
