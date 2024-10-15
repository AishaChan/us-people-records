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

const AlphabetContainer = styled.div`
  display: flex;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  justify-content: space-around; 
  align-items: center; 
  margin-bottom: 20px;
  padding: 10px 0;
`;

const AlphabetHeader = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #06416b;
`;

const AlphabetButton = styled.button`
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 5px;
  margin: 2px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  color: #06416b;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 100px; 
  margin-bottom: 20px;
`;

const FooterLogo = styled.div`
  display: flex;
  width: 200px;
  text-align: left;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterNavLink = styled.a`
  font-family: Roboto;
  font-size: 16px;
  color: #06416b;
  text-decoration: none;
  margin: 5px 0;
  &:hover {
    color: #333;
  }
`;

const TrendingNameContainer = styled.div`
  text-align: left;
`;

const BrowseByState= styled.div`
  display: flex;
  justify-content: space-between;
  background-color:#f9f8fd;
  align-items: center;
  // padding: 0 100px;
  padding: 0px 15px 20px 15px;
`;

const StateText= styled.div`
text-align: left;
padding-left: 85px;
width: 600px;
`;

const StateOptions= styled.div`
text-align: left;
`;

const DateButton = styled.button`
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  margin: 2px;
  font-size: 12px;
  cursor: pointer;
  color: #06416b;
`;

const FooterCopyright = styled.div`
  font-family: Roboto;
  font-size: 14px;
  color: #b6b8c4;
  margin-top: 20px;
`;

const StateButton = styled.button`
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 20px;
  margin: 5px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  color: #06416b;
`;

const TrendingNameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Alphabet Search */}
      <AlphabetContainer>
        <AlphabetHeader>US People Record Directory</AlphabetHeader>
        <div>
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((char) => (
            <AlphabetButton key={char}>{char}</AlphabetButton>
          ))}
        </div>
      </AlphabetContainer>

      <FooterNav>
        {/* Logo and Description */}
        <FooterLogo>
          <img width={130} height={130} alt="logo" src={require("../Assets/images/US-01-01.png")}></img>
          <br></br>
          <p style={{color:"#898ba3"}}>A people record platform dedicated to displaying the detailed records of individuals across the United States.</p>
        </FooterLogo>

        {/* Company Section */}
        <FooterColumn>
          <FooterNavLink href="#" ><strong>Company</strong> </FooterNavLink>
          <FooterNavLink href="#">Blog</FooterNavLink>
          <FooterNavLink href="#">Contact</FooterNavLink>
        </FooterColumn>

        {/* Support Section */}
        <FooterColumn>
          <FooterNavLink href="#" ><strong>Support</strong></FooterNavLink>
          <FooterNavLink href="#">FAQs</FooterNavLink>
          <FooterNavLink href="#">Terms of Service</FooterNavLink>
          <FooterNavLink href="#">Privacy Policy</FooterNavLink>
          <FooterNavLink href="#">Remove Data</FooterNavLink>
        </FooterColumn>

        {/* Trending Name Search */}
        <TrendingNameContainer>
          <h4 style={{ color: '#06416b' }}><strong>Trending Name Search</strong></h4>
          <TrendingNameGrid>
            {[...Array(9).keys()].map((i) => (
              <DateButton key={i}>10/{12 - i}</DateButton>
            ))}
          </TrendingNameGrid>
        </TrendingNameContainer>
      </FooterNav>

      {/* Browse by State */}
      <BrowseByState>
        <StateText>
          <p style={{color: "#06416b"}}><strong>Browse by State</strong></p>
        </StateText>

        <StateOptions>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
          {[
            "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
            "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
            "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
            "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
            "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
          ].map((state) => (
            <StateButton key={state}>{state}</StateButton>
          ))}
        </div>
        </StateOptions>
      </BrowseByState>

      {/* Footer Copyright */}
      <FooterCopyright>
        &copy; 2024 U.S. People Search
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;