import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import { Link } from 'react-router-dom';
import './show-item.css'
import Adminav from '../Admin/admin-nav';
import Footer from '../Shared/footer';


class Show extends React.Component {
    state = {
        item: {}
    }

    async componentDidMount() {
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/items/" + this.props.match.params.id)
            if (response.status !== 200) {
                throw new Error('wrong id')
            }
            const data = await response.json()
            this.setState({
                item: data
            })
        } catch (err) {
            console.log('here')
            this.props.history.push('/pagenotfound')
        }
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

                        <p>If you are interested in the above item
                            {item.privacy === "publishDetails"
                                ? (
                                    <p>please enquire with {item.firstName} at <a href={`mailto:${item.email}`}>{item.email}</a></p>
                                ) : (
                                    <p>please enquire with Matiu Bush at <a href={`mailto:info@onegoodstreet.com.au`}>info@onegoodstreet.com.au</a></p>
                                )
                            }
                        </p>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}



export default Show;

