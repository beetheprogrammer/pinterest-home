import styled from "styled-components";
import { FONT_SIZES } from "./sizes";

export const StyledText = styled("p")`
	font-size: ${({ fontSize }) => FONT_SIZES[fontSize] || FONT_SIZES.normal};
  font-weight: 600;
  color: ${({color})=> color || "auto" };
  white-space: nowrap;

  &.logo{
    letter-spacing: -1px;
  }
`;