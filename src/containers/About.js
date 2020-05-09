import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4">
                    จัดทำเพื่อฝึกการพัฒนาเว็บไซต์ด้วยภาษา React 
                </p>
                <h4 className="text-success">Adisorn Nakyim</h4>
            </div>

            <Footer company="Adisorn Nakyim" email="adisornnakyim2@gmail.com" />
        </div>
    )
}

export default About;