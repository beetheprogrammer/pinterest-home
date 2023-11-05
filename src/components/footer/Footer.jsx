import React from "react";
import { StyledFooter } from "./Footer.styled";
import { StyledText } from "../utils/Text.styled";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
	return (
		<StyledFooter>
			<StyledText>Here's how it works</StyledText>
			<MdOutlineKeyboardArrowDown size={26}/>
		</StyledFooter>
	);
};

export default Footer;
