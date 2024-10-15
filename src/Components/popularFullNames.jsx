import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #f8f9fa; /* Light grey background */
  padding: 20px 40px; /* Padding around the text */
  text-align: center; /* Centering the text */
`;

const Title = styled.h1`
  font-size: 28px; /* Large font size for the title */
  color: #343a40; /* Dark grey color */
  margin: 0 0 10px 0; /* Spacing below the title */
`;

const Description = styled.p`
  font-size: 16px; /* Smaller font size for the description */
  color: #6c757d; /* Medium grey color */
  margin: 0; /* Remove default paragraph margin */
`;

function PopularFullNames() {
  return (
    <HeaderContainer>
      <Title>1000 Most Popular Full Names in the US</Title>
      <Description>Explore our comprehensive directory of the 1,000 most popular full names across the United States. Select any name to access detailed records including contact information, legal history, and social media profiles specific to each individual. Whether you're conducting personal research or seeking unique name inspirations, US People Record offers the insights you need.</Description>
    </HeaderContainer>
  );
}

export default PopularFullNames;