import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CreateItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            headline: '',
            description: '',
            category: [], //drop down
            postcode: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            email: '',
            privacy: '', //drop Boolean
            image: '',
            delivery: '' //checkbox boolean check check
        }
    }

    
    render() {
        return (<div>
            <form onSubmit={this.props.handleSubmit}>
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