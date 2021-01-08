import React from 'react';
import { Row, Grid, Column } from 'gatsby-theme-carbon/src/components/Grid';
import {
  footer,
  grid,
  content,
  nav,
  listItem,
} from './Footer.module.scss';



const AlvearieFooter = () => (
	<footer className={footer}>
    <Grid className={grid}><Row>
	<Column className={content}
            colLg={6}
            colMd={4}
            colSm={2}>
		<p> &#169; Copyright 2020, IBM</p>
	</Column>
	<Column className={content}
            colLg={6}
            colMd={4}
            colSm={2}>
        <ul className={nav}>
             <li className={listItem}>
               <a href="https://github.com/Alvearie/alvearie.github.io/issues" target="_blank" rel="noreferrer"><nobr>
               		Suggest an edit on GitHub
               </nobr></a>
             </li>
        </ul>
	</Column>
	</Row></Grid>
	</footer>
);

export default AlvearieFooter;
