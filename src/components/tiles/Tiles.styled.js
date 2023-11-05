import styled from "styled-components";
import { motion } from "framer-motion";

export const TilesContainer = styled.div`
  /* background-color: grey; */
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-content: end;
  margin-top: 19rem;
`

export const TileColumn = styled("div")`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	transform: translateY(${({ margin }) => margin || "0rem"});
	/* padding-top: ${({ margin }) => margin || "0rem"} */
  position: absolute;
  /* left: 0; */
`;

export const AnimatedColumn = styled(motion.div)`
  position: relative
	/* display: flex;
	flex-direction: column;
	gap: 1rem;
	transform: translateY(${({ margin }) => margin || "0rem"}); */
	/* padding-top: ${({ margin }) => margin || "0rem"} */
`;

export const Tile = styled(motion.img)`
	background-color: #ccc;
  height: 23rem;
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;