import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';
import './show-item.css'


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

        // let name = "";
        // let phone = "";
        // let email = "";

        // if ({ item.privacy } == "true") {
        //     name = { item.firstName },
        //         phone = { item.phone },
        //         email = { item.email }
        // }
        // else {
        //     name = "Matiu Bush",
        //         phone = "0455 555 555",
        //         email = "info@onegoodstreet.com.au"
        // };


        return (
            <div >
                <Header />
                <Title title={item.itemName} />


                <div className="mainshowdiv">
                    <img src={item.image} />
                    <div className="showtext">
                        <p>{item.description}</p>
                        <p>📍 {item.postcode}</p>



                        {/* <p>Please enquire with {name} on {phone} or at {email}</p> */}
                        <p>{item.delivery ? "✅ Delivery available" : "❌ Delivery unavailable"}</p>

                    </div>

                </div>

            </div>
        )
    }
}



export default Show;

