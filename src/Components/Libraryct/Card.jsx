import React from 'react';
import './card-style.css'


// class Librarycard extends React.Component {
//     state = {
//         data: null
//     }

//     async componentDidMount() {
//         const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/libraryofcarethings/:id")
//         const data = await response.json()
//         this.setState({
//             data: data
//         })
//         console.log(data)
//     }

//     // Key might get rid of console errors

//     render() {
//         console.log(process.env.REACT_APP_BACKEND_URL)
//         const { data } = this.state
//         return (
//             <div className="pageContainer">
//                 <h1>items 👻</h1>
//                 {data ? data.map((itemname, index) => {
//                     return (
//                         <div className="another">
//                             <div className="itemContainer">
//                                 <div className="itemItem" key={index}>
//                                     <h3>{item.name}</h3>
//                                     <img src={item.imageUrl}></img>
//                                     <p>{item.description}</p>
//                                     <p>SKU: {item.sku} <h3>${item.price}</h3></p>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }) : null}
//             </div>
//         )
//     }
// }

// export default Librarycard;


const Librarycard = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet</p>
                <p className="card-text text-secondary">📍 Melbourne</p>
            </div>
        </div>
    )
}

export default Librarycard;