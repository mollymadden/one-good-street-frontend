//This is the table that the admin sees 

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./table.css";

const Item = props => (
         

    <tr>
    <td className="resize"><Link to={"/items/" + props.item._id}>{props.item.itemName}</Link></td>
    <td className="resize">{props.item.description}</td>
    <td>{props.item.firstName}</td>
    <td>{props.item.lastName}</td>
    <td>{props.item.phone}</td>
    <td>{props.item.address}</td>
    <td><a href={"mailto:" + props.item.email}>{props.item.email}</a></td>
    {/* <td>{props.item.email}</td> */}
    <td>{props.item.privacy}</td>
    <td><Link to={"/items/" + props.item._id}><img src={props.item.image} /></Link></td>
    {/* <td>{props.item.image}</td> */}
    <td>{props.item.delivery ? 'yes' : 'no'}</td>
    <td>{props.item.published ? 'yes' : 'no'}</td>

    <td className="icons">
      <Link to={"/items/edit/" + props.item._id}>📝</Link>
      <a href="#" onClick={() => { props.deleteItem(props.item._id) }}>🗑</a>
    </td>
  </tr >
)

class TableList extends React.Component {
  state = {
    items: this.props.items
  }

componentDidMount() {
  console.log(this.state.items[0].delivery)
}
//Jack help way
  deleteItem = (id) => {

    const option = {
      url: process.env.REACT_APP_BACKEND_URL + "/items/delete/" + id,
      method: "DELETE",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": `${localStorage.authToken}`
      }
    }
    axios(option)
      .then(response => { console.log(response.data)});
      

    this.setState({
      items: this.state.items.filter(el => el._id !== id)
    })
  }


  itemList() {
    return this.state.items.map(currentitem => {
      return <Item item={currentitem} deleteItem={this.deleteItem} key={currentitem._id} />;
    })
  }


  render() {
    return (
      <div>
        <h1 className="blurb-border-title">List of all items</h1>


        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Description</th>
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
            {this.itemList()}
          </tbody>
        </table>
      </div >
    )
  }
}


export default TableList;