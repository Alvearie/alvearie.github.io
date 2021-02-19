import React from 'react';

const API_ENDPOINT = process.env.SLACK_REQUEST_API_ENDPOINT;



class RequestSlackForm extends React.Component {

  submitHandler = (event) => {
    var email = document.FORM.email.value;
    var components = document.FORM.components.value;
    
    var re = /\S+@\S+\.\S+/;
    if (email === '') {
      alert("No email address was entered");
      return;
    } else if (!re.test(email)) {
      alert("The email entered was not valid");
      return; 
    }
    
    var data = {"email": "None", "components": "None"};
    data.email = email;
    data.components = components;
    
    console.log("Body: " + JSON.stringify(data));
    console.log("ENDPOINT: " + API_ENDPOINT);
    fetch(API_ENDPOINT, {
      method: 'POST', 
      body: JSON.stringify(data)
    }).then(res => {console.log(res.status);
    }).catch(error => {
       console.log(error.message);
       return;
    });
    
    var formDiv = document.getElementById("requestForm");
    formDiv.style.display = 'none';
    var successDiv = document.getElementById("successDiv");
    successDiv.style.display = 'block';
    
    
  }
  render() {
  return (
<form name="FORM">
<div id="requestForm" style={{'background-color': '#444444', 'color': '#cccccc', 'padding': '15px', 'width': 'min-content'}}>
<span style={{'font-weight':'bold', 'padding-bottom': '15px', 'display': 'inline-block'}}>Join us on Alvearie Slack!</span><br/>
Email address: <input type="text" name="email"/><br/>
What Alvearie features/components are you most interested in? 
<textarea name="components" rows="3" cols="50" placeholder="Optional">
</textarea>
<br/> 
<center>
<input type="button" value="Request an invite" onClick={this.submitHandler}/>
</center>
</div>
<div id="successDiv" style={{'display':'none', 'background-color': '#444444', 'color': '#cccccc', 'padding': '15px', 'width': '400px'}}>
<span style={{'font-weight':'bold', 'padding-bottom': '15px', 'display': 'inline-block'}}>Your invite request has been sent.  <p/>Thanks!</span><br/>

</div>
</form>
);
}
}

export default RequestSlackForm;
