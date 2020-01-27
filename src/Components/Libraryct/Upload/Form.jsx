//This is the base form component for the edit and create item component. It renders for both edit and create
//It calls on the 'handleSubmit' function that is like a middle-layer for this form's submit handlers - see index.jsx and createItem.jsx and editItem.jsx 


import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../Shared/form-styling.css';




class Form extends React.Component {


    render() {
        return (<div className="main-form">

            <form onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="itemName">Name of item</label><br />
                    <Field name="itemName" component="input" type="text" ></Field>
                </div>
                <div className="form-group">
                    <label htmlFor="headline">Headline</label><br />
                    <Field name="headline" component="input" type="text"></Field>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label><br />
                    <Field name="description" component="input" type="text"></Field>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label><br />
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
                <div className="form-group">
                    <label htmlFor="postcode">Postcode where item is located</label><br />
                    <Field name="postcode" component="input" type="text"></Field>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label><br />
                    <Field name="firstName" component="input" type="text"></Field>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label><br />
                    <Field name="lastName" component="input" type="text"></Field>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label><br />
                    <Field name="phone" component="input" type="text"></Field>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label><br />
                    <Field name="address" component="input" type="text"></Field>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label><br />
                    <Field name="email" component="input" type="text"></Field>
                </div>
                <div className="form-group">
                    <label htmlFor="privacy">Privacy Settings</label><br />
                    <Field name="privacy" component="select" type="text">
                        <option></option>
                        <option value="publishDetails">Publish my phone number and first name - I will arrange handover directly</option>
                        <option value="NotPublishDetails">Please do not publish my details - One Good Street should arrange handover</option>
                    </Field>
                </div>

                <div className="form-group">
                    {/* <button onClick={this.props.showWidget}></button> */}
                    <label htmlFor="image" >Image</label><br />
                    <Field name="image" component="input" type="button" className="upload-image-button" onClick={this.props.showWidget}></Field>
                </div>
                <div className="form-group">
                    <label htmlFor="delivery">I can offer delivery</label>
                    <Field name="delivery" component="input" type="checkbox"></Field>
                </div>
                <div>
                    <button type="submit" className="general-button">{this.props.btnText}</button>
                </div>

            </form>

            <p>You cannot edit this form once submitted. For any changes, or to remove this listing, please email info@onegoodstreet.com.au</p>
        </div>
        );
    }
}
Form = reduxForm({ form: 'item' })(Form);
export default Form;