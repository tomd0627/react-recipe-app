import styled from "styled-components";
import { motion } from "framer-motion";

export const Grid = styled(motion.div)`
  gap: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;
