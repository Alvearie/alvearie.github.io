import React from 'react';
import styled from '@emotion/styled';
import { Row, Column } from 'gatsby-theme-carbon/src/components/Grid';
import Caption from 'gatsby-theme-carbon/src/components/Caption';
import bg from '../../images/landingPage/bg_hex-tile.png';
import ecosystemImage from '../../images/landingPage/bg_objectives-transform-hex.png';
import componentsImage from '../../images/landingPage/bg_objectives-scalable-hex.png';
import refImplImage from '../../images/landingPage/bg_objectives-metal-grid.png';



const OuterDiv = styled(Caption)`
  width: auto;
  background-image: url(${(props) => props.image});
  border: 1px solid #555555; 
  margin-left: -200px;
  margin-right: -50px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const InnerDiv = styled(Caption)`
   margin-left: 200px;
   margin-right: 50px;
   width: auto;
`;
const ObjectiveCard = styled(Caption)`
  background-image: url(${(props) => props.image});
  background-size: cover;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 60%;
  font-size: 16px;
`;

const ObjectivesSection = () => (
<>
  <OuterDiv image={bg}>
  <InnerDiv>
    <h2>Key Objectives</h2>
<Row>
  <Column colMd={4} colLg={4} noGutterMdLeft>
    <ObjectiveCard image={ecosystemImage}>
        Transform healthcare tech with an open ecosystem of composable services aligned
        with open standards, and delivered via cloud agnostic technology
    </ObjectiveCard>
  </Column> 
  
  <Column colMd={4} colLg={4} noGutterMdLeft>
    <ObjectiveCard image={componentsImage}>
        Build an extensible, modular, scalable set of components that can be pipeline
        aligned with common industry-standard data models
    </ObjectiveCard>
  </Column>
  
  <Column colMd={4} colLg={4} noGutterMdLeft>
    <ObjectiveCard image={refImplImage}>
       Be the leading reference implementation in healthcare, highlighting how to combine
       various technologies into meaningful patterns for healthcare
    </ObjectiveCard>
  </Column>
</Row>
</InnerDiv>
  </OuterDiv>
</>
);

export default ObjectivesSection;
