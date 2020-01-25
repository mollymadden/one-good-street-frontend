import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import { Link } from 'react-router-dom';
import './show-item.css'
import Adminav from '../Admin/admin-nav';


class Show extends React.Component {
    state = {
        item: {}
    }

    async componentDidMount() {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/items/" + this.props.match.params.id)
        const data = await response.json()
        this.setState({
            item: data
        })


    }

    render() {
        console.log(process.env.REACT_APP_BACKEND_URL + "/items/" + this.props.match.params.id)
        const { item } = this.state;
        let { email } = item.privacy == "publishDetails" ? item.email : 'info@onegoodstreet.com.au';
        let { name } = item.privacy == "publishDetails" ? item.firstName : 'One Good Street';

        return (
            <div >
                <Header />
                <Adminav />
                <Title title={item.itemName} />


                <div className="mainshowdiv">
                    <img src={item.image} />
                    <div className="showtext">
                        <p>{item.description}</p>
                        <p>📍 {item.postcode}</p>

                        <p>{item.delivery ? "✅ Delivery available" : "❌ Delivery unavailable"}</p>

                        <p>If you are interested in the above item, &nbsp;
                            {item.privacy == "publishDetails"
                                ? `please enquire with ${item.firstName} at ${item.email}`
                                : "please enquire with Matiu Bush at info@onegoodstreet.com.au"}
                        </p>
                    </div>
                </div>
            </div >
        )
    }
}



export default Show;

