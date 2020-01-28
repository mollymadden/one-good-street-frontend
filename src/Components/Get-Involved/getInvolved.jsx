import React from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios'

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

        this.props.history.push('/about'); 
         //goes back to home
        //window.location.reload(false); //page can reload after recipe item added
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

  render () {
    return (
      <div>
        <h1>Get Involved!</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

          <div>
            <Field name="firstName" component={this.renderField} type="text" label="First Name"></Field>
          </div>
          <div>
            <Field name="lastName" component={this.renderField} type="text" label="Last Name"></Field>
          </div>
          <div>
            <Field name="address" component={this.renderField} type="text" label="Address"></Field>
          </div>
          <div>
            <Field name="email" component={this.renderField} type="email" label="Email"></Field>
          </div>
          <div>
            <Field name="phone" component={this.renderField} type="text" label="Phone"></Field>
          </div>
          <div>
           
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

          <div>
            <Field 
            name="comments" 
            component={this.renderField} 
            type="text"
            label="Comments"
            >
            </Field>
          </div>

          <button type="submit">Submit</button>


        </form>
      </div>
    )
  }
}

export default reduxForm({form: 'getInvolved', validate}) (GetInvolved);