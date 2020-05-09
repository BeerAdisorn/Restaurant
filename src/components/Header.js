import React, { Component } from "react";

// const Header = (props) => {
//     return <div>
//         <h1>{props.company} </h1> <p> Email : {props.email}</p>
//     </div>

// }

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date() };
        // setInterval(() => this.tick(), 1000);

    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-success">
                            <img src="/images/logo/logo.png"></img>
                            Snow Mann !!
                        </h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header;