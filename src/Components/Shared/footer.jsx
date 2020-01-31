import React from 'react';
import footer from "../../assets/footer.png";



class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <img src={footer} alt="logo" style={{ backgroundColor: "#D5ECEA", paddingTop: "2%" }} />
            </div>
        )
    }
}

export default Footer;