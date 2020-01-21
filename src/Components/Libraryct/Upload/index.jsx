import React from "react";
import CreateItem from './Form'
import Header from '../../Shared/Header';
import Title from '../../Shared/Title';
import axios from 'axios';


class Upload extends React.Component {
    handleCreateItem = (data) => {
        console.log(data);

        //component to say uploading?? Put in here

        axios.post('https://vast-headland-25884.herokuapp.com' + '/items/create', data)

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