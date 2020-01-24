//Index page for upload an item

//This is where the components CreateItem and EditItem are rendered. 

//CreateItem and EditItem render the base Form.jsx and then index.jsx renders components CreateItem and EditItem. 

import React from "react";
import CreateItem from './createItem'
import Header from '../../Shared/Header';
import Title from '../../Shared/Title';
import Adminav from '../Admin/admin-nav';
import axios from 'axios';



class Upload extends React.Component {



    handleCreateItem = (data) => {
        console.log(data);

        //component to say uploading?? Put in here

        axios.post(process.env.REACT_APP_BACKEND_URL + '/items/create', data)

            .then(res => {
                this.props.history.push('/');
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //for cloudinary image upload

    // async handleImageUpload() {
    //     const data = new FormData()
    //     data.append('file', item.image)
    //     data.append('upload_preset', 'onegoodst')
    //     data.append('cloud_name', 'onegoodst')
    //     const response = await axios.post(process.env.CLOUDINARY_URL, data);
    //     const imageUrl = response.data.url;
    //     return imageUrl;

    // }


    // //check this!!!!
    // async handleSubmit(event) {
    //     try {
    //       event.preventDefault();
    //       setLoading(true);
    //       setError("");
    //       const imageUrl = await handleImageUpload();
    //       const url = `${baseUrl}/api/product`;
    //       const { name, price, description } = product;
    //       const payload = { name, price, description, imageUrl };
    //       await axios.post(url, payload);
    //       // console.log({ response });
    //       setProduct(INITIAL_PRODUCT);
    //       setSuccess(true);
    //     } catch (error) {
    //       catchErrors(error, setError);
    //     } finally {
    //       setLoading(false);
    //     }
    //   }





    render() {
        return (
            <div>
                <Header />
                <Adminav />
                <Title title="Upload an Item" />
                <div>
                    <CreateItem onSubmit={this.handleCreateItem} />



                </div>
            </div>
        )
    }
}
export default Upload;