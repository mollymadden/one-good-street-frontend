//imports base Form.jsx here and renders the base form. 



import React from 'react';
import Form from './Form';


class CreateItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            headline: '',
            description: '',
            category: '', //drop down
            postcode: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            email: '',
            privacy: '', //drop down
            image: '',
            delivery: '' //checkbox boolean
        }
    }



    render() {
        return (<div>
            <Form btnText={'Add Item'} onSubmit={this.props.onSubmit} />

        </div>
        );
    }
}

export default CreateItem;