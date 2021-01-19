import React from 'react';
import ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';

const API_ENDPOINT = process.env.FEEDBACK_API_ENDPOINT;

const FeedbackDialog = ({ props }) => {
  const onSubmit = data => {
    console.log('Submitting feedback');
    console.log('ENDPOINT: ' + API_ENDPOINT);
    var comment = 'No comment';
    if (data.comment.length > 0) {
	    comment = data.comment;
	}
	const emoji = data.experience === 'Negative'
      ? ':disappointed:'
      : data.experience === 'Neutral'
      ? ':neutral_face:'
      : ':grinning:';
      
    const text = emoji + " " + data.experience + ": " + comment
	
    const body = {
    	"text": text
    };
    console.log('body: ' + JSON.stringify(body));
    
    fetch(API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;
};

export default FeedbackDialog;
