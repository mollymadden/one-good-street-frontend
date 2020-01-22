//Calling base form component here in Form.jsx

import React from "react";
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
          <Form btnText={'Edit Item'} onSubmit={this.props.onSubmit} />

          
      </div>
      );
  }
}

export default EditItem;
