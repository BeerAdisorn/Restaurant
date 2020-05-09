import React, { Component } from "react";

// const Productitem = (props) => {
//     return <div>
//         <h1>{props.productname}:{props.unitprice}</h1>
//     </div>
// }

class Productitem extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const { productName, unitPrice, thumbnail } = this.props.product;

        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{unitPrice}</p>
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)}>
                    ซื้อ
            </button>

            </div>
        )
    }
}

export default Productitem;