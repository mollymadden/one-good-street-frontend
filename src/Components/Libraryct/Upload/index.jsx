//This is where the components CreateItem and EditItem are rendered. 

//CreateItem and EditItem render the base Form.jsx and then index.jsx renders components CreateItem and EditItem. 

import React from "react";
import CreateItem from './createItem'
import EditItem from './editItem';
import Header from '../../Shared/Header';
import Title from '../../Shared/Title';
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

    

    render() {
        return (
            <div>
                <Header />
                <Title title="Upload an Item" />
                <div>
                    <CreateItem onSubmit={this.handleCreateItem} />
                    


                </div>
            </div>
        )
    }
}
export default Upload;