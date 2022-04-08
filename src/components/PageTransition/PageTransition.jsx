import React from 'react';

import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8,
    },

    in: {
        opacity: 1,
        x: 0,
        scale: 1,
    },

    out: {
        opacity: 0,
        x: '-100%',
        scale: 1.1,
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

function PageTransition(props) {
    return <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        {props.children}
    </motion.div>
}

export default PageTransition;