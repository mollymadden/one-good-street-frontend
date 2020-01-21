import React from 'react';
import Header from '../Shared/Header';
import Title from '../Shared/Title';

class Show extends React.Component {
    render() {
        return (
            <div className="Main">
                <Header />
                <Title title={items.itemName} />
            </div>
        )
    }
}


export default Show;