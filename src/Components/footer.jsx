import React from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Styled components for Footer
const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 20px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const FooterNavLink = styled.a`
  font-family: Roboto;
  font-size: 16px;
  color: #333;
  text-decoration: none;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterText = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 700;
  color: #333;
  left: 800px;
  text-align: left;
  padding: 20px
`;

const FooterForm = styled.form`
  display: flex;
  gap: 10px;
  padding-right: 200px;
`;

const FooterInput = styled.input`
  font-family: Roboto;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align : center;
`;

const FooterButton = styled.button`
  padding: 10px 20px;
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
  background-color: #23d19d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FooterCopyright = styled.div`
  font-family: Roboto;
  font-size: 14px;
  color: #aaa;
  margin-top: 20px;
`;

const FooterIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const FooterIcon = styled.a`
  color: #333;
  font-size: 20px;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <FooterNavLink href="#">Home</FooterNavLink>
        <FooterNavLink href="#">Blog</FooterNavLink>
        <FooterNavLink href="#">Pricing</FooterNavLink>
        <FooterNavLink href="#">Contact us</FooterNavLink>
        <FooterNavLink href="#">Privacy Policy</FooterNavLink>
      </FooterNav>
      <FooterContent>
        <FooterText>
          Subscribe to our newsletter to get
          latest updates and news
        </FooterText>
        <FooterForm>
          <FooterInput type="email" placeholder="Enter Your Email" />
          <FooterButton type="submit">Subscribe</FooterButton>
        </FooterForm>
      </FooterContent>
      <FooterIcons>
        <FooterIcon href="#">
          <FacebookIcon />
          {/* <i className="fab fa-facebook-f"></i> */}
        </FooterIcon>
        <FooterIcon href="#">
          {/* <i className="fab fa-twitter"></i> */}
          <XIcon />
        </FooterIcon>
        <FooterIcon href="#">
          {/* <i className="fab fa-instagram"></i> */}
          <InstagramIcon />
        </FooterIcon>
        <FooterIcon href="#">
          {/* <i className="fab fa-linkedin"></i> */}
          <LinkedInIcon />
        </FooterIcon>
      </FooterIcons>
      <FooterCopyright>
        &copy; 2023 Copyright@123
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
