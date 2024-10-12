import React from "react";
import styled from "styled-components";

const UsPeopleRecordContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-family: Roboto;
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  font-family: Roboto;
  color: #888a8a;
  margin-bottom: 20px;
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const Service = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  width: 150px;
  font-family: Roboto;
  text-align: left;
`;

const ServiceIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.div`
  font-size: 14px;
  color: #666;
`;

const FindRecord = () => {
  const services = [
    {
      title: "Cell phone numbers",
      description: "Start a free people search today to discover.",
      icon: "📞",
    },
    {
      title: "Background checks",
      description: "Through True Rich Attended does no end it his mother.",
      icon: "📊",
    },
    {
      title: "Traffic records",
      description: "Through True Rich Attended does no end it his mother.",
      icon: "🚦",
    },
    {
      title: "Criminal Record",
      description: "Start a free people search today to discover.",
      icon: "⚖️",
    },
    {
      title: "Addresses",
      description: "Start a free people search today to discover.",
      icon: "🏠",
    },
    {
      title: "Relatives",
      description: "Start a free people search today to discover.",
      icon: "👪",
    },
  ];

  return (
    <UsPeopleRecordContainer>
      <Title>What can I Find on UsPeopleRecord?</Title>
      <Description>
        Start a free people search today to discover white pages listings and
        public records for anyone.
      </Description>
      <Services>
        {services.map((service, index) => (
          <Service key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </Service>
        ))}
      </Services>
    </UsPeopleRecordContainer>
  );
};

export default FindRecord;
