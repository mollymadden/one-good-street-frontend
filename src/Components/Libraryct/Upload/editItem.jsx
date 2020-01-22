import React from "react";
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import Form from './Form';

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


  
  render() {
      return (<div>
          <Form btnText={'Edit Item'} onSubmit={this.props.handleEditItem} />

          
      </div>
      );
  }
}

export default EditItem;
