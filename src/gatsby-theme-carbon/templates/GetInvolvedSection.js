import React from 'react';
import ecosystemIcon from '../../images/landingPage/icon_ecosystem.svg';
import insightsIcon from '../../images/landingPage/icon_insights.svg';
import partnersIcon from '../../images/landingPage/icon_partners.svg';
import solveIcon from '../../images/landingPage/icon_solve.svg';



const GetInvolvedSection = () => (
<>
<h2>Get Involved</h2>
<table>
<tr>
	<td style={{'vertical-align': 'top'}}>
		<img src={ecosystemIcon} style={{'padding-right': '35px', 'max-width': 'auto'}} alt="Ecosystem"/>
	</td>
	<td style={{'vertical-align': 'top'}}>
		<div style={{'font-weight': 'bold', 'padding-bottom': '10px'}}>
			Solve problems across the healthcare ecosystem
		</div>
		<div style={{'padding-bottom': '25px'}}>
			Our work will drive innovative solutions that address top industry challenges related to care
			quality and delivery, consumer experiences, clinical development, and more.
		</div>
	</td>
</tr>
<tr>
	<td style={{'vertical-align': 'top', 'width': '100px'}}>
		<img src={insightsIcon} style={{'padding-right': '35px'}} alt="Insights"/>
	</td>
	<td style={{'vertical-align': 'top'}}>
		<div style={{'font-weight': 'bold', 'padding-bottom': '10px'}}>
			Make data more useful to enhance clinical and operational outcomes
		</div>
		<div style={{'padding-bottom': '25px'}}>
			Contribute to a collection of assets that aim to improve data ingestion, integration, persistence
			and analytics.  Core components in Alvearie support healthcare standards like HL7,FHIR and DICOM.
		</div>
	</td>
</tr>
<tr>
	<td style={{'vertical-align': 'top', 'width': '100px'}}>
		<img src={partnersIcon} style={{'padding-right': '35px'}} alt="partners"/>
	</td>
	<td style={{'vertical-align': 'top'}}>
		<div style={{'font-weight': 'bold', 'padding-bottom': '10px'}}>
			Collaborate with contributors from across health and life sciences
		</div>
		<div style={{'padding-bottom': '25px'}}>
			Alvearie calls on contributors from across HCLS - from private and public orgs, to tech vendors
			and developers - to bring a diverse array of perspectives and experiences to our work.
		</div>
	</td>
</tr>
<tr>
	<td style={{'vertical-align': 'top', 'width': '100px'}}>
		<img src={solveIcon} style={{'padding-right': '35px'}} alt="Solve"/>
	</td>
	<td style={{'vertical-align': 'top'}}>
		<div style={{'font-weight': 'bold', 'padding-bottom': '10px'}}>
			Explore enterprise-scale open source technologies
		</div>
		<div style={{'padding-bottom': '25px'}}>
			Alvearie leans on top open source technologies - from OpenShift, to Kubernetes, to Python 
			and more - to leverage enterprise scale in our work.
		</div>
	</td>
</tr>
</table>
</>
);

export default GetInvolvedSection;
