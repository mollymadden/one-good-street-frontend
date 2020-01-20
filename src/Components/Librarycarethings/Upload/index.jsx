import React from "react";
import SyncValidationForm from './Form'
import Header from '../../Shared/Header';
import Title from '../../Shared/Title';

function handleForm(values) {
    console.log(values);
}

class Upload extends React.Component {
    submit = (values) => {
        console.log(values);
    }

    render() {
        return(
        <div>
            <Header />
            <Title title="Upload an Item" />
            <div>

            <SyncValidationForm handleSubmit={handleForm} />

            </div>
        </div>
        )
    }
}

export default Upload;