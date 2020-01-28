import React from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios'


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
        this.props.history.push('/'); 
         //goes back to home
        //window.location.reload(false); //page can reload after recipe item added
      })
      .catch((err) => {
        console.log(err)
      })
      
  }

  render () {
    return (
      <div>
        <h1>Get Involved!</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text"></Field>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text"></Field>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Field name="address" component="input" type="text"></Field>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"></Field>
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <Field name="phone" component="input" type="text"></Field>
          </div>

          <div>
            <label htmlFor="services">Interested in which services</label>
            <Field 
            name="services" 
            component="input" 
            type="text"
            >
            {/* <option></option>
            <option value="volunteer">Volunteer</option>
            <option value="ride-to-end-loneliness">Ride to end loneliness</option>
            <option value="library-of-care">Library of care things</option>
            <option value="volunteer">Volunteer</option> */}
            </Field>
          </div>

          <div>
            <label htmlFor="comments">Comments</label>
            <Field 
            name="comments" 
            component="input" 
            type="text"
            >
            </Field>
          </div>

          <button type="submit">Submit</button>


        </form>
      </div>
    )
  }
}

export default reduxForm({form: 'getInvolved'}) (GetInvolved);