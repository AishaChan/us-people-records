import React from "react";
import styled from "styled-components";
// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  background-color: #f8f9fa;
`;

const TextSection = styled.div`

  padding: 30px;
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

const BoxSection = styled.div`
  position: absolute;
  width: 153px;
  height: 522px;
  top: 2142px;
  left: 736px;
  background-color: #23d19d;
  opacity: 0.74;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 45px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #0d1317;
  flex: 1;
  display: flex;
`;

const Paragraph = styled.p`
  width: 562px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-align: left;
  color: #888a8a;

`;

const List = styled.ul`
  width: 511px;
  font-family: Roboto;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  &:before {
    color: #000;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`;

// Functional component
const UsPeopleRecord = () => {
  return (
    <Container>
      <TextSection>
        <Title>What is UsPeopleRecord?</Title>
        <Paragraph>
          Learn more information about how reverse address lookup can help keep
          you, your family and your friends safe. There are so many ways to use
          PeopleFinders services to find valuable information. Whether it is for
          an online meetup, or learning about a neighborhood.
        </Paragraph>
        <Paragraph>
          Learn more information about how reverse address lookup can help keep
          you, your family and your friends safe. There are so many ways to use
          PeopleFinders services to find valuable information. Whether it is for
          an online meetup, or learning about a neighborhood.
        </Paragraph>
        <List>
          <ListItem>
            Get background details, criminal records, contact info & more.
          </ListItem>
          <ListItem>
            Find criminal records, arrest records & sex offender records.
          </ListItem>
          <ListItem>
            Research available marriage, divorce & property records.
          </ListItem>
          <ListItem>
            Get background details, criminal records, contact info & more.
          </ListItem>
          <ListItem>
            Find criminal records, arrest records & sex offender records.
          </ListItem>
          <ListItem>
            Research available marriage, divorce & property records.
          </ListItem>
        </List>
      </TextSection>
      <ImageSection>
        <Image src="Image.png" alt="UsPeopleRecord" />
      </ImageSection>
      {/* <BoxSection /> */}
          </Container>
  );
};

export default UsPeopleRecord;
