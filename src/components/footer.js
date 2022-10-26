import React from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import logoFooter from "../images/footer.png";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.palette.primary.main};
  > img {
    width: 100%;
  }
`;
function Footer() {
  const theme = useTheme();
  return (
    <FooterContainer theme={theme}>
      <img src={logoFooter} alt="Logo Municipalidad de Saladillo" />{" "}
    </FooterContainer>
  );
}

export default Footer;
