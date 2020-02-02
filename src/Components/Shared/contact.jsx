//This is the ContactUs component that is rendered on the slider.jsx file that is in the Shared folder in the Components folder

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios'
import './slider.css'


//Validation for the form
function validate(values) {
  let errors = {};

  if (!values.name) {
    errors.name = 'Required'
  }


  if (!values.email) {
    errors.email = 'Required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.message) {
    errors.message = 'Required'
  }

  return errors;
}



//Rendering for the text area field
const renderTextAreaField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div>
      <label>{label}</label>
      <div>
          <textarea rows="4" cols="50" {...input} placeholder={label} type={type}>
              {children}
          </textarea>
          {touched && error && <span>{error}</span>}
      </div>
  </div>
)

class ContactUs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  onSubmit = (data) => {
    console.log(data);

    axios.post(process.env.REACT_APP_BACKEND_URL + '/send/contact', data)
      .then(res => {
        this.props.history.push('/thankyou');
        //goes back to home
        //window.location.reload(false); 
      })
      .catch((err) => {
        console.log(err)
      })

  }


  renderField({ input, label, type, meta: { touched, error, warning } }) {
    //console.log(input)
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>

      </div>
    );
  }

  render() {

    return (
      <div className="main-form">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>


          <div className="form-group">
            <Field name="name" component={this.renderField} type="text" label="Name"></Field>
          </div>
          <div className="form-group">
            <Field name="email" component={this.renderField} type="email" label="Email"></Field>
          </div>

          <div className="form-group">
            <Field
              name="message"
              className="contact-message-input"
              component={renderTextAreaField}
              type="message"
              label="Message"
            >

            </Field>
          </div>

          <button className="general-button" type="submit">Submit</button>


        </form>
      </div>
    )
  }
}


export default withRouter(reduxForm({ form: 'contactUs', validate })(ContactUs));


