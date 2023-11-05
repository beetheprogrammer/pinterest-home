import styled, { css } from "styled-components";
import { StyledText } from "../utils/Text.styled";

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.4rem 1rem 0rem 1.8rem;
	width: 100%;
	position: absolute;
	top: 0;
	z-index: 2;
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.2rem;
`;

export const LinksContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const StyledLink = styled(StyledText)`
	color: inherit;
	text-decoration: none;
	margin-right: 1.5rem;

	&:hover {
		text-decoration: underline;
	}
`;

export const AuthButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const AuthButton = styled(StyledText)`
	padding: 0.7rem;
	border-radius: 2rem;

	${({ type }) =>
		type === "highlight" &&
		css`
			background-color: #e60022;
			color: white;
		`}

  &:hover{
    cursor: pointer;
    opacity: .7;
  }
`;
