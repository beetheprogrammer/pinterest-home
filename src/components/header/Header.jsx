import React from 'react'
import { AuthButton, AuthButtonsContainer, LinksContainer, LogoContainer, StyledHeader, StyledLink } from './Header.styled'
import {FaPinterest} from "react-icons/fa"
import { StyledText } from '../utils/Text.styled'

const Header = () => {
  return (
		<StyledHeader>
			<LogoContainer>
				<FaPinterest size={33} color="#E60022" />
				<StyledText as="h1" fontSize="large" className="logo" color="#E60022">
					Pinterest
				</StyledText>
			</LogoContainer>
			<LinksContainer>
				<StyledLink href="/" as="a">
					About
				</StyledLink>
				<StyledLink href="/" as="a">
					Business
				</StyledLink>
				<StyledLink href="/" as="a">
					Blog
				</StyledLink>
				<AuthButtonsContainer>
					<AuthButton as="button" type="highlight">
						Log in
					</AuthButton>
					<AuthButton as="button">Sign up</AuthButton>
				</AuthButtonsContainer>
			</LinksContainer>
		</StyledHeader>
	);
}

export default Header