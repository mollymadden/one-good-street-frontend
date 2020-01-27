//This is the base form component for the edit and create item component. It renders for both edit and create
//It calls on the 'handleSubmit' function that is like a middle-layer for this form's submit handlers - see index.jsx and createItem.jsx and editItem.jsx 
//Form validations are handled here. 



import React from 'react';
import { Field, reduxForm } from 'redux-form';


//Form validation

function validate (values) {
    let errors = {};

    if (!values.itemName)
    {
        errors.itemName = 'Required'
    }

    if (!values.description)
    {
        errors.description= 'Required'
    }

    if (!values.category)
    {
        errors.category = 'Required'
    }

    if (!values.postcode)
    {
        errors.postcode = 'Required'
    }

    if (!values.firstName)
    {
        errors.firstName= 'Required'
    }

    if (!values.lastName)
    {
        errors.lastName= 'Required'
    }

    if (!values.email)
    {
        errors.email= 'Required'
    }
    else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) )
    {
        errors.email = 'Invalid email address'
    }

    if (!values.privacy)
    {
        errors.privacy= 'Required'
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

class Form extends React.Component {

    renderField( {input, label, type, meta: { touched, error, warning }} ) {
        //console.log(input)
        return (
          <div>
            <label>{label}</label>
            <div>
            <input {...input} placeholder={label} type={type} />
            { touched && 
            ( ( error && <span>{error}</span> ) || 
              (warning && <span>{warning}</span> ) ) }
            </div>
            
          </div>
          
        );
      }

    render() {
        return (<div>
            
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    
                    <Field name="itemName" component={this.renderField} type="text" label="Item name"></Field>
                </div>
                <div>
                    <Field name="headline" component={this.renderField} type="text" label="Headline"></Field>
                </div>
                <div>
                    <Field name="description" component={this.renderField} type="text" label="Description"></Field>
                </div>
                <div>
                    <Field
                        name="category"
                        component={renderSelectField}
                        type="category"
                        label="Category">
                        <option></option>
                        <option value="Bedroom">Bedroom</option>
                        <option value="Braces and support">Braces and Support</option>
                        <option value="Dressing and Grooming">Dressing and Grooming</option>
                        <option value="Orthotics and Footcare">Exercise and therapy</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Household Aid">Household Aid</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Mobility">Mobility</option>
                        <option value="Orthotics and footcare">Orthotics and Footcare</option>
                        <option value="Toileting">Toileting</option>
                        <option value="Other">Other</option>
                    </Field>
                </div>
                <div>
                    <Field name="postcode" component={this.renderField} type="text" label="Postcode"></Field>
                </div>
                <div>
                    <Field name="firstName" component={this.renderField} type="text" label="First Name"></Field>
                </div>
                <div>
                    <Field name="lastName" component={this.renderField} type="text" label="Last Name"></Field>
                </div>
                <div>
                    <Field name="phone" component={this.renderField} type="text" label="Phone"></Field>
                </div>
                <div>
                    <Field name="address" component={this.renderField} type="text" label="Address"></Field>
                </div>
                <div>
                    <Field name="email" component={this.renderField} type="text" label="Email"></Field>
                </div>
                <div>
                    <Field name="privacy" component={renderSelectField} type="text" label="Privacy">
                        <option></option>
                        <option value="publishDetails">Publish my phone number and first name - I will arrange handover directly</option>
                        <option value="NotPublishDetails">Please do not publish my details - One Good Street should arrange handover</option>
                    </Field>
                </div>
                
                <div>
                    <label htmlFor="image" >Image</label>
                    <Field name="image" component="input" type="button" onClick={this.props.showWidget}></Field>
                </div>
                <div>

                    <Field name="delivery" component={this.renderField} type="checkbox" label="I can offer delivery"></Field>

                </div>
                <div>
                    <button type="submit">{this.props.btnText}</button>
                </div>

            </form>

            <p>You cannot edit this form once submitted. For any changes, or to remove this listing, please email matiubush@onegoodstreet.com</p>
        </div>
        );
    }
}
// Form = reduxForm({ form: 'item' })(Form);
// export default Form;

export default reduxForm({form: 'item', validate})(Form);