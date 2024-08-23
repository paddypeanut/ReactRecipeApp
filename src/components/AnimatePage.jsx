import {motion} from 'framer-motion';


const AnimatePage = ({children}) => {
    const animate = {
        initial: {opacity:0},
        animate: {opacity:1},
        exit: {opacity:1, duration: 1}
    }
    
    return(
        <motion.div
            variants={animate}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration:.75, ease: 'easeInOut'}}
        >
            {children}
        </motion.div>
    );
}

export default AnimatePage;