//Calling base form component here in Form.jsx

import React from "react";
import Form from './Form';
import axios from 'axios';

class EditItem extends React.Component {
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

  handleEditItem = (data) => {

    console.log('handleEdit data', data);
    //component to say uploading?? Put in here
    const option = {
        url: process.env.REACT_APP_BACKEND_URL + "/items/edit/" + this.props.match.params.id,
        method: "PUT",
        headers: {
          "authorization": `${localStorage.authToken}`
        },
        data: data
      }

    axios(option)
        .then(res => {
            this.props.history.push('/');
        })
        .catch((err) => {
            console.log(err)
        })

}


  componentDidMount() {

    axios.get(process.env.REACT_APP_BACKEND_URL + '/items/'+this.props.match.params.id)

      .then(response => {
          console.log(response.data)
        this.setState(
            { itemData:
            
            {
            itemName: response.data.itemName,
            headline: response.data.headline,
            description: response.data.description,
            category: response.data.category,
            postcode: response.data.postcode,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            phone: response.data.phone,
            address: response.data.address,
            email: response.data.email,
            privacy: response.data.privacy,
            image: response.data.image,
            delivery: response.data.delivery
        } } )
      })
      .catch(function(error) {
        console.log(error);
      })
    }

  
  render() {
      return (<div>
   
            <Form btnText={'Edit Item'} onSubmit={this.handleEditItem} item={this.state} initialValues={this.state.itemData} />
          

          
      </div>
      );
  }
}

export default EditItem;
