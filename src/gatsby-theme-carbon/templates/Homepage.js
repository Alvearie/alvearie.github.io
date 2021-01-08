import React from 'react';
import { HomepageBanner} from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import bg from '../../images/TempBackground.jpg';



const BannerText = () => <h2>An open source project to enable <b>healthcare innovation</b></h2>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={bg} />,
  FirstCallout: (
    <br/>
  ),
  SecondCallout: (
    <br/>
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
