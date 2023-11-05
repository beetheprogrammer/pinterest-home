import styled, { keyframes } from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

export const BodyContainer = styled.div`
	/* background-color: pink; */
	position: relative;
	/* display: flex; */
  overflow: hidden;
`;

export const AnimatedHeading = styled(motion.div)`
	/* background-color: orange; */
	position: absolute;
  /* transform: translateX(50); */
  /* left: -50% !important; */
  top: 44%;
`;

export const AnimatedHeadingsContainer = styled.div`
	/* background-color: pink; */
	position: relative;
`;

export const DotsContainer = styled.div`
	/* background-color: pink; */
	position: relative;
	gap: 0.8rem;
	display: flex;
	margin-top: 2.2rem;
	z-index: 4;
`;

export const Dot = styled.div.attrs(({ bgColor }) => ({
	bgColor: bgColor || "#e1e1e1",
}))`
	height: 0.6rem;
	width: 0.6rem;
	border-radius: 100rem;
	background-color: ${({ bgColor }) => bgColor};

  &:hover{
    cursor: pointer;
  }
`;

export const HeadingsContainer = styled.div`
	display: flex;
	width: fit-content;
	/* background-color: orange; */
	flex-direction: column;
	/* align-items: center; */
	gap: 5.2rem;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 50%;
  top: 25%;
	transform: translateX(-50%);
  z-index: 2;
`;

const bounce = keyframes`
  0%{
    transform: translate(-50%, 0)
  }
  50%{
    transform: translate(-50%, -2rem)
  }
  100%{
    transform: translate(-50%, 0rem)
  }
`;

export const StyledAnimatedIcon = styled(MdOutlineKeyboardArrowDown)`
	background-color: ${({ bgColor }) => bgColor || "black"};
	color: white;
	border-radius: 100rem;
	position: absolute;
	bottom: 1rem;
	left: 50%;
	transform: translateX(-50%);
	animation: ${bounce} 2s ease-in-out infinite;
`;

