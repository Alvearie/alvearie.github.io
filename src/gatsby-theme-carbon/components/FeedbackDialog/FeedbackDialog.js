import React from 'react';
import ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';

const API_ENDPOINT = process.env.FEEDBACK_API_ENDPOINT;

const FeedbackDialog = ({ props }) => {
  const onSubmit = data => {
    console.log('Submitting feedback');
    console.log('ENDPOINT: ' + API_ENDPOINT);
    console.log('data: ' + JSON.stringify(data)); 
    fetch(API_ENDPOINT, {
      method: 'POST', 
      body: JSON.stringify(data),
    }).then(res => {console.log(res.status);});
   };

  return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;
};

export default FeedbackDialog;
