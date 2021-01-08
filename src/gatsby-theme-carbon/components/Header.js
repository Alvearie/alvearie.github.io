import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';
import logo from '../../images/alvearieTransparent.png';

const CustomHeader = (props) => (
  <Header {...props}>
   <img src={logo} height="50" alt="Alvearie"/> <span>Alvearie</span>
  </Header>
);

export default CustomHeader;
