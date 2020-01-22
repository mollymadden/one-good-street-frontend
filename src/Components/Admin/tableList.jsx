import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Item = props => (  

  <tr>
    <td>{props.item.itemName}</td>
    <td>{props.item.headline}</td>
    <td>{props.item.description}</td>
    <td>
      <Link to={"/edit/"+props.item._id}>edit</Link> | <a href="#" onClick={() => { props.deleteItem(props.item._id) }}>delete</a>
    </td>
  </tr>
  )

class TableList extends React.Component {


  deleteItem = (id) => {
    axios.delete('https://vast-headland-25884.herokuapp.com' + "/items/" + id)
      .then(response => { console.log(response.data)});
      
    this.setState({
      items: this.props.items.filter(el => el._id !==id)
    })
  }

  itemList() { 
    return this.props.items.map(currentitem => {
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