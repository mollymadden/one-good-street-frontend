//This is the table that the admin sees 

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Item = props => (  

  <tr>
    <td>{props.item.itemName}</td>
    <td>{props.item.headline}</td>
    <td>{props.item.description}</td>
    <td>{props.item.category}</td>
    <td>{props.item.postcode}</td>
    <td>{props.item.firstName}</td>
    <td>{props.item.lastName}</td>
    <td>{props.item.phone}</td>
    <td>{props.item.address}</td>
    <td>{props.item.email}</td>
    <td>{props.item.privacy}</td>
    <td>{props.item.image}</td>
    <td>{props.item.delivery}</td>
    <td>{props.item.published}</td>
    
    <td>
      <Link to={"/edit/"+props.item._id}>edit</Link> | <a href="#" onClick={() => { props.deleteItem(props.item._id) }}>delete</a>
    </td>
  </tr>
  )

class TableList extends React.Component {
state = {
  items: this.props.items
}

//Jack help way
  deleteItem = (id) => {
    const option = {
      url: "https://vast-headland-25884.herokuapp.com/items/delete/" + id,
      method: "DELETE",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": `${localStorage.authToken}`
      }
    }
    axios(option)
      .then(response => { console.log(response.data)});
      
    this.setState({
      items: this.state.items.filter(el => el._id !==id)
    })
  }


  
  

  


//chris way - not working
  // deleteItem = (id) => {
  //   axios
  //   .delete("https://vast-headland-25884.herokuapp.com/items/delete/" + id)
  //   .then(response => {
  //     window.location.replace("/items");
  //     console.log(response.data);
  //   })
  // }

  itemList() { 
    return this.state.items.map(currentitem => {
      return <Item item={currentitem} deleteItem={this.deleteItem} key={currentitem._id}/>;
    })
  }


  render () {
    return (
      <div>
        <h1>List of all items</h1>

        <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Headline</th>
            <th>Description</th>
            <th>Category</th>
            <th>Postcode</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Email</th>
            <th>Privacy</th>
            <th>Image</th>
            <th>Delivery</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          { this.itemList() }
        </tbody>
      </table>
      </div>
    )
  }
}


export default TableList;