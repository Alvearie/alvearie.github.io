import React from 'react';
import { HomepageBanner} from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import homepageStyles from "./Homepage.module.scss"

import bg from '../../images/landingPage/bg_hero-landing-page.jpg';



const BannerText = () => <span className={homepageStyles.title}>An open source project<br/>designed to enable<br/><span className={homepageStyles.titleBold}>healthcare innovation</span></span>;

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
