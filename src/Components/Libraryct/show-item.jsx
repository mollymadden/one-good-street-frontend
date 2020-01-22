import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';


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

        return (
            <div >
                <Header />
                <Title title={item.itemName} />
            </div>
        )
    }
}



export default Show;

