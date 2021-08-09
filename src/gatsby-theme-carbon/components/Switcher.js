import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import { SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher'; // add brackets
import { SwitcherDivider } from 'gatsby-theme-carbon/src/components/Switcher'; // add brackets

const CustomSwitcher = (props) => (
  <Switcher {...props}>
  
	<SwitcherDivider>Blogs</SwitcherDivider>
    <SwitcherLink {...props}  href="https://alvearie.io/blog/getting-started-with-alvearie/"  isInternal >
      Getting Started with Project Alvearie
    </SwitcherLink>
    <SwitcherLink {...props} href="https://developer.ibm.com/components/kafka/blogs/4-reasons-to-join-project-alvearie-ibms-open-source-healthcare-effort/">
      4 reasons to join open source Project Alvearie and help solve healthcare’s toughest problems
    </SwitcherLink>
    <SwitcherLink {...props} href="https://alvearie.io/blog/clinical-records-ingestion-pattern/">
      Using Open Source to Build a Healthcare Record Ingestion Pattern
    </SwitcherLink>
	
	
    <SwitcherDivider>Contribute</SwitcherDivider>
	<SwitcherLink {...props}  href="https://alvearie.io/contributions/requestSlackAccess/" >
      Request access to Alvearie Slack 
    </SwitcherLink>
    <SwitcherLink {...props} href="https://alvearie.slack.com/">
      Login to Alvearie Slack
    </SwitcherLink>


	<SwitcherDivider>Other Links</SwitcherDivider>
	<SwitcherLink {...props}  href="https://www.ibm.com/watson-health/solutions/healthcare-interoperability" >
      Healthcare interoperability solutions at IBM 
    </SwitcherLink>
	
  </Switcher>
);

export default CustomSwitcher;