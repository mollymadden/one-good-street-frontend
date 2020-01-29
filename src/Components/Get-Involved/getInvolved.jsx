//This is a component that renders in the index.jsx file that is found in the Get-involved folder. 
//On submission, it is connected to the backend and nodemailer via the axios post request

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function validate(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.services) {
    errors.services = 'Required'
  }

  return errors;


}


//Rendering for the drop down box
const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        {children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class GetInvolved extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      services: '',
      comments: ''
    }
  }

  onSubmit = (data) => {
    console.log(data);

    axios.post(process.env.REACT_APP_BACKEND_URL + '/send/involved', data)

      .then(res => {
        console.log("GET INVOLVED")
        this.props.history.push('/thankyou');
        //goes back to home
        //window.location.reload(false); //
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
            <Field name="firstName" component={this.renderField} type="text" label="First Name"></Field>
          </div>
          <div className="form-group">
            <Field name="lastName" component={this.renderField} type="text" label="Last Name"></Field>
          </div>
          <p>If you would like your street to be accredited as a One Good Street please fill out your full address with street name and suburb.</p>

          <div className="form-group">
            <Field name="address" component={this.renderField} type="text" label="Address"></Field>
          </div>
          <div className="form-group">
            <Field name="email" component={this.renderField} type="email" label="Email"></Field>
          </div>
          <div className="form-group">
            <Field name="phone" component={this.renderField} type="text" label="Phone"></Field>
          </div>
          <div className="form-group">

            <Field
              name="services"
              component={renderSelectField}
              type="services"
              label="Services I'm interested in"
            >
              <option></option>

              <option value="volunteer">Volunteer</option>
              <option value="ride-to-end-loneliness">Ride to end loneliness</option>
              <option value="library-of-care">Library of care things</option>
              <option value="meal sharing">Meal Sharing</option>
              <option value="admin support">Admin support</option>
              <option value="free text">Free text</option>
              <option value="other">Other</option>
            </Field>
          </div>


          <div className="form-group">
            <label htmlFor="comments">Comments</label><br />
            <Field
              name="comments"
              component="textarea"
              type="comments"
              label="Comments"
            >
            </Field>
          </div>

          <button className="general-button" type="submit">Submit</button>


        </form>
      </div>
    )
  }
}


export default withRouter(reduxForm({ form: 'getInvolved', validate })(GetInvolved));


