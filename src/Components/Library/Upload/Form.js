import React from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

// function validate(values) {
//     let errors = {};

//     if (!values.itemName) {
//         errors.itemName = 'Required';
//     }
//     else if (values.itemName.length < 1) {
//         errors.itemName = 'Must be 1 characters or more';
//     }

//     if (!values.headline) {
//         errors.headline = 'Required';
//     }
//     else if (values.headline.length > 50) {
//         errors.headline = 'Must be 50 characters or less';
//     }


//     if (!values.description) {
//         errors.description = 'Required';
//     }

//     if (!values.category) {
//         errors.category = 'Required';
//     }

//     if (!values.postcode) {
//         errors.postcode = 'Required';
//     }

//     if (!values.firstName) {
//         errors.firstName = 'Required';
//     }
//     else if (values.firstName.length < 1) {
//         errors.firstName = 'Must be 3 characters or more';
//     }

//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     }
//     else if (values.lastName.length < 1) {
//         errors.lastName = 'Must be 3 characters or more';
//     }

//     if (!values.phone) {
//         errors.phone = 'Required';
//     }

//     if (!values.address) {
//         errors.address = 'Required';
//     }

//     if (!values.email) {
//         errors.email = 'Required';
//     }
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address'
//     }

//     return errors;
// }

class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            privacy: "",
            image: "",
            delivery: ""
        }
    }
    



    // renderField({ input, label, type, meta: { error } }) {
    //     return (
    //         <div>

    //                 <label>{label}</label>

    //                 <div>
    //                     <input {...input} placeholder={label} type={type} />
    //                 </div>

    //                 <div>
    //                     {error}
    //                 </div>
    //         </div>
    //     )
    //     }

    onSubmit = (data) => { 

        console.log(data);
        
        axios.post('https://vast-headland-25884.herokuapp.com' + '/items/create', data)
        
            .then(res => {
            this.props.history.push('/'); 

            })
            .catch((err) => {
            console.log(err)
            })
            
        }

        render() {
            return (<div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

                <div>
                <label htmlFor="itemName">Name of item</label>
                <Field name="itemName" component="input" type="text"></Field>
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
                <Field name="category" component="input" type="text"></Field>
                </div>

                <div>
                <label htmlFor="postcode">Postcode</label>
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
                <label htmlFor="privacy">Privacy</label>
                <Field name="privacy" component="input" type="text"></Field>
                </div>

                <div>
                <label htmlFor="image">Image</label>
                <Field name="image" component="input" type="text"></Field>
                </div>

                <div>
                <label htmlFor="delivery">Delivery</label>
                <Field name="delivery" component="input" type="text"></Field>
                </div>

                <div>
                <button type="submit">Add Item</button>
                </div>

                    {/* <label htmlFor="itemName">
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
                    </button> */}

                    
                </form>
                </div>
            );
        }
    }



    CreateItem = reduxForm({ form: 'item' })(CreateItem);
    export default CreateItem;