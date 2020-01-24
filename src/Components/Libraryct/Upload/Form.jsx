//This is the base form component for the edit and create item component. It renders for both edit and create
//It calls on the 'handleSubmit' function that is like a middle-layer for this form's submit handlers - see index.jsx and createItem.jsx and editItem.jsx 


import React from 'react';
import { Field, reduxForm } from 'redux-form';



class Form extends React.Component {


    render() {
        return (<div>
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label htmlFor="itemName">Name of item</label>
                    <Field name="itemName" component="input" type="text" ></Field>
                </div>
                <div>
                    <label htmlFor="headline">Headline</label>
                    <Field name="headline" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Field name="description" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <Field
                        name="category"
                        component="select"
                        type="category">
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
                    <label htmlFor="postcode">Postcode where item is located</label>
                    <Field name="postcode" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <Field name="phone" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <Field name="address" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="privacy">Privacy Settings</label>
                    <Field name="privacy" component="select" type="text">
                        <option></option>
                        <option value="publishDetails">Publish my phone number and first name - I will arrange handover directly</option>
                        <option value="NotPublishDetails">Please do not publish my details - One Good Street should arrange handover</option>
                    </Field>
                </div>
                
                <div>
                <button onClick={this.props.showWidget}></button>
                    <label htmlFor="image">Image</label>
                    <Field name="image" component="input" type="image"></Field>
                </div>
                <div>
                    <label htmlFor="delivery">I can offer delivery</label>

                    <Field name="delivery" component="input" type="checkbox"></Field>

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
Form = reduxForm({ form: 'item' })(Form);
export default Form;