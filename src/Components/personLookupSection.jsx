import React from "react";
import styled from "styled-components";

// Styled components for the section
const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 20px; /* Add space after header */
  margin-top: 20px;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  color: #666;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

const ImageContainer = styled.div`
  flex: 0.5;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const PersonLookupSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <SubTitle>US People Record</SubTitle>
        <Title>Your Ultimate Person Lookup Service</Title>
        <Paragraph>
          Searching for information about someone online is supposed to be a
          breeze. After all, search engines like Google claim to show you the
          most relevant results for whatever you want. Unfortunately, this
          often doesn’t include public records about everyday people. When you
          need information on someone, you need a way to get results that is
          fast, reliable, and easy — which is where US People Record comes in.
        </Paragraph>
        <Paragraph>
          Whether you want to learn more information about the CEO of a company
          or connect with a long-lost family member, US People Record has you
          covered. Our people search engine utilizes multiple public record
          databases at once, resulting in a report that gives you a full
          picture of someone by revealing information from criminal records,
          marriage records, civil records, bankruptcies, loans, lawsuits,
          address records, and more. You’ll also be shown their available email
          addresses, phone numbers, alternate names, and even social media
          profiles.
        </Paragraph>
      </ContentContainer>
      <ImageContainer>
        <Image src="path-to-your-image.jpg" alt="People crossing street" />
      </ImageContainer>
    </SectionContainer>
  );
};

export default PersonLookupSection;