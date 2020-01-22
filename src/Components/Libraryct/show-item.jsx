import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import './show-item.css'
import Adminav from '../Admin/admin-nav';


class Show extends React.Component {
    state = {
        item: {}
    }


    async componentDidMount() {
        const response = await fetch("https://vast-headland-25884.herokuapp.com/items/" + this.props.match.params.id)
        const data = await response.json()
        this.setState({
            item: data
        })
    }

    render() {
        console.log("https://vast-headland-25884.herokuapp.com/items/" + this.props.match.params.id)
        const { item } = this.state;

        //     let name = "";
        //     let phone = "";
        //     let email = "";



        //     function Privacy(props) {
        //         const privacy = props.privacy;
        //         if (privacy == "Publish my phone number and first name - I will arrange handover directly") {
        //             name = item.firstName,
        //                 phone = item.phone,
        //                 email = item.email;
        //         }
        //         name = "Matiu Bush",
        //             phone = "0455 555 555",
        //             email = "info@onegoodstreet.com.au";
        //     }


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
                            {item.privacy == "publish"
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

