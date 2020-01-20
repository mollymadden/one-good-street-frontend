import React from 'react';
import { Field, reduxForm } from 'redux-form';


function validate(values) {
    let errors = {};

    if (!values.itemName) {
        errors.itemName = 'Required';
    }
    else if (values.itemName.length < 1) {
        errors.itemName = 'Must be 1 characters or more';
    }

    if (!values.headline) {
        errors.headline = 'Required';
    }
    else if (values.headline.length > 50) {
        errors.headline = 'Must be 50 characters or less';
    }


    if (!values.description) {
        errors.description = 'Required';
    }

    if (!values.category) {
        errors.category = 'Required';
    }

    if (!values.postcode) {
        errors.postcode = 'Required';
    }

    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    else if (values.firstName.length < 1) {
        errors.firstName = 'Must be 3 characters or more';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    else if (values.lastName.length < 1) {
        errors.lastName = 'Must be 3 characters or more';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    }

    if (!values.address) {
        errors.address = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors;
}

class SyncValidationForm extends React.Component {

    state = {
            itemName: "",
            headline: "",
            description: "",
            category: [],
            postcode: "",
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            email: "",
            privacy: false,
            image: "",
            delivery: false
    }

    renderField({ input, label, type, meta: { error } }) {
        return (
            <div>

                    <label>{label}</label>

                    <div>
                        <input {...input} placeholder={label} type={type} />
                    </div>

                    <div>
                        {error}
                    </div>
            </div>
        )
        }

        render() {
            return (
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Name of Item: <input type="text" name="itemName" onChange={this.fieldChange} />
                    </label>

                    <label>
                        Headline (50 chars): <input type="text" name="headline" onChange={this.fieldChange} />
                    </label>

                    <label>
                        Description of Item: <input type="text" name="description" onChange={this.fieldChange} />
                    </label>

                    <label>
                        Category: <input type="text" name="category" onChange={this.fieldChange} />

                        <select category={this.state.category} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>

                    <label>
                        Postcode where item is located: <input type="text" name="postcode" onChange={this.fieldChange} />
                    </label>

                    <label>
                        Your first name: <input type="text" name="firstName" onChange={this.fieldChange} />
                    </label>

                    <label>
                        Your last name: <input type="text" name="lastName" onChange={this.fieldChange} />
                    </label>

                    <label>
                        Best contact number: <input type="text" name="phone" onChange={this.fieldChange} />
                    </label>

                    <label>
                        Your address: <input type="text" name="address" onChange={this.fieldChange} />
                    </label>

                    <label>
                        Your email: <input type="text" name="email" onChange={this.fieldChange} />
                    </label>

                    <label>
                        Your email: <input type="text" name="email" onChange={this.fieldChange} />
                    </label>

                    <label>
                    Are you happy to publish your details so people can contact you directly?:
                    <input
                        name="privacy"
                        type="checkbox"
                        checked={this.state.privacy}
                        onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Your email: <input type="text" name="email" onChange={this.fieldChange} />
                    </label>

                    <label>
                    Can you provide delivery within Greater Melbourne?
                    <input
                        name="delivery"
                        type="checkbox"
                        checked={this.state.delivery}
                        onChange={this.handleInputChange} />
                    </label>

                    <button type="submit" >
                            Submit
                    </button>

                    
                </form>
            );
        }
    }



SyncValidationForm = reduxForm({ form: 'syncValidation', validate })(SyncValidationForm);
export default SyncValidationForm;