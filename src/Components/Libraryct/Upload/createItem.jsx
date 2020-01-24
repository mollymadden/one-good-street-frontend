//imports base Form.jsx here and renders the base form. 



import React from 'react';
import Form from './Form';
import axios from 'axios';
import Header from '../../Shared/Header';
import Title from '../../Shared/Title';
import Adminav from '../../Admin/admin-nav';


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
    handleCreateItem = (data) => {
        console.log(data);

        //component to say uploading?? Put in here

        axios.post(process.env.REACT_APP_BACKEND_URL + '/items/create', data)

            .then(res => {
                window.alert("Your item has been submitted for review. Please allow 72 hours for a response.");
                this.props.history.push('/library');
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        return (<div>
            <Header />
            <Adminav />
            <Title title="Add a New Item" />
            <Form btnText={'Add Item'} onSubmit={this.handleCreateItem} />
            <h1>{this.props.test}</h1>
        </div>
        );
    }
}

export default CreateItem;