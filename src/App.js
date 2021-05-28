import React from "react";

import "./App.css";
import Header from "./Header"
import Form from "./Form"
import Content from "./Content"
import Footer from "./Footer"

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="row">
                <div className="col-md-4">
                    <Form/>
                </div>
                <div className="col-md-8">
                    <Content></Content>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;