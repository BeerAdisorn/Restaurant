import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Productitem from './components/Product/Productitem';
import Footer from './components/Footer';
import Monitor from './components/Monitor/Monitor';
import axios from 'axios';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Productitem productname="IPhone" unitprice="14,000" />
//       <Productitem productname="Samsung" unitprice="2,000" />
//       <Footer name="Adisorn Nakyim" email="adisorn.nak@cpc.ac.th" />
//     </div>
//   );
// }


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products: "" };
  }

  componentDidMount() {
    // this.setState({
    //   products: [
    //     { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
    //     { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
    //     { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
    //     { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
    //     { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
    //     { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
    //   ]
    // })

    // การรับข้อมูลผ่าน API ด้วย HTTP GET 
    // fetch("http://localhost:3001/products", { method: "GET" }).then(res => res.json()).then(res => { this.setState({ products: res }) })

    // การรับข้อมูลผ่าน API ด้วย Axios
    axios.get("http://localhost:3001/products").then(res => {
      console.log(res.data);
      { this.setState({ products: res.data }) }
    })
  }



  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.state.products} />
        <Footer name="Adisorn Nakyim" email="adisorn.nak@cpc.ac.th" />
      </div>
    );
  }
}

export default App;