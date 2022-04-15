import React, { createRef, useEffect } from 'react';

function RandomLetters(props) {
    const refText = createRef();

    useEffect(() => {
        addSpanInTextElement(props.text);
    }, []);

    /**
     * Create a amount of span element by text
     * 
     * @param {string} text
     * @return
     */
    const addSpanInTextElement = (text) => {
        for (const index in text) {
            const letter = text[index];

            const span = document.createElement('span');
            span.innerHTML = ' ';

            refText.current.appendChild(span);

            setTimeout(() => {
                animateLetter({
                    element: span,
                    letter: letter,
                    stragger: props.durationByLetter,
                });
            }, props.durationAnimation * index);
        }
    }

    /**
     * Animate a letter
     * 
     * @param {object} options 
     * @param {number} contador 
     * @returns 
     */
    const animateLetter = (options, contador = 0) => {
        if (contador > props.amountRandomLetter) {
            options.element.innerText = options.letter;
            return;
        }

        contador++;

        setTimeout(() => {
            options.element.innerText = generateRandomChar();
            animateLetter(options, contador);
        }, options.stagger);
    }

    /**
     * Generate a random char
     * 
     * @return {string}
     */
    const generateRandomChar = () => {
        return Math.random().toString(36)[3];
    }

    return <h1 ref={refText} className={`text-${props.color}`} />
}

export default RandomLetters;