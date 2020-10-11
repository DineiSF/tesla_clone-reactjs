import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled( motion.div )`
    margin-top:     -100vh;
    top:            0;
    height:         100vh;
    position:       sticky;

    display:        flex;
    flex-direction: column;
    align-items:    center;
`;
