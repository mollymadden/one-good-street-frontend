import React from "react";
import axios from 'axios';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: '',
      headline: '',
      description: '',
      category: [],
      postcode: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      email: '',
      privacy: '',
      image: '',
      delivery: '' 
    }
  }

  render () {
    return (<div>
      
    </div>)
  }

}