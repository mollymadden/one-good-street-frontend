//This is the table of all items that the admin sees - library dashboard

//On this page the admin can delete items. 
//The admin can edit items. Clicking the edit link renders the EditItem component. 

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./table.css";

const Item = props => (


  <tr>
    <td className="resize"><Link to={"/items/" + props.item._id} target="_blank">{props.item.itemName}</Link></td>
    <td className="resize">{props.item.description}</td>
    <td>{props.item.firstName}</td>
    <td>{props.item.lastName}</td>
    <td>{props.item.phone}</td>
    <td>{props.item.address}</td>
    <td><a href={"mailto:" + props.item.email}>{props.item.email}</a></td>
    {/* <td>{props.item.privacy}</td> */}

    <td>{props.item.privacy === "publishDetails"
      ? `public`
      : 'private'}</td>


    <td>{props.item.delivery ? 'yes' : 'no'}</td>
    <td><Link to={"/items/" + props.item._id}><img src={props.item.image} alt="the item" /></Link></td>



    <td className="icons">
      <Link to={"/items/edit/" + props.item._id}>📝</Link></td>

    <td className="icons"><a href="#" onClick={() => { if (window.confirm('Are you sure you want to delete this item?')) { props.deleteItem(props.item._id) } }}>🗑</a></td>
    <td>{props.item.published ? 'yes' : 'no'}</td>
    <td className="icons">< a href="#" onClick={(e) => { props.togglePublished(e, props.item._id) }}>
      {props.item.published ? '🔓' : '🔐'}
    </a></td>
  </tr >
)

class TableList extends React.Component {
  state = {
    items: this.props.items
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
      .then(response => { console.log(response.data) });

    this.setState({
      items: this.state.items.filter(el => el._id !== id)
    })
  }

  togglePublished = async (e, id) => {
    try {

      e.preventDefault()


      {/* makes a put request to backend, returns the updated document with publish toggled */ }
      const response = await axios.put(process.env.REACT_APP_BACKEND_URL + "/items/toggle-publish", {
        id: id
      })
      {/* iterates through all the items in state, when it finds the document with the same as the above it overrides the original with the updated document */ }
      const newItems = this.state.items.map((item) => {
        if (item._id === id) {
          return response.data
        } else {
          return item
        }
      })
      {/* resets the state with the mapped array */ }
      this.setState({
        items: newItems
      })
    } catch (err) {
      console.log(err.message)
    }
  }


  itemList() {
    return this.state.items.map(currentitem => {
      return <Item item={currentitem} deleteItem={this.deleteItem} key={currentitem._id} togglePublished={this.togglePublished} />;
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
              <th>Delivery</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Published</th>
              <th>Toggle Published</th>
            </tr>
          </thead>
          <tbody>
            {this.itemList().reverse()}
          </tbody>
        </table>
      </div >
    )
  }
}


export default TableList;