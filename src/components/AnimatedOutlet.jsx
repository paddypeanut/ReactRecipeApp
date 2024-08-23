import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";

const AnimatedOutlet = () => {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <>
            <AnimatePresence more="wait">
                {outlet&& React.cloneElement(outlet, {key: location.pathname})}
            </AnimatePresence>
        </>
    )
}

export default AnimatedOutlet;