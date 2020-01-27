//imports base Form.jsx here and renders the base form. 
//This component is linked by the Button component that then links to this item (CreateItem component)



import React from 'react';
import Form from './Form';
import axios from 'axios';
import Header from '../../Shared/Header';
import Title from '../../Shared/Title';
import Adminav from '../../Admin/admin-nav';
import ContactForm from '../../Shared/slider';


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

        //this is pushing the image url of cloudinary to mongodb and enables the image to then render on pages of the website
        data.image = this.state.image
        console.log('data image', data.image)
        
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

        const myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'onegoodst',
            uploadPreset: 'onegoodst'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info.url);
                this.setState({
                    image: result.info.url
                })
            }
        }
        )

        const showWidget = async () => {
            await myWidget.open()
            console.log('state image', this.state.image)

        }

        return (<div>
            <Header />
            <ContactForm />
            <Adminav />
            <Title title="Add a New Item" />
            {/* {this.state.image !== '' && <p>{this.state.image}</p>} */}
            <Form btnText={'Add Item'} onSubmit={this.handleCreateItem} showWidget={showWidget} />

        </div>
        );
    }
}

export default CreateItem;