import React, { Component } from "react";

import "./App.css";
import Header from "./Header"
import Form from "./Form"
import Content from "./Content"
import Footer from "./Footer"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { key: "" };
    }

    // todo: rename functions and parameters
    parentFunction = (data_from_child) => {
        this.setState({ key: data_from_child });
    }

    render() {
        return (
            <div className="App">
                <div id="container">
                    <Header />
                    <div id="body" className="row">
                        <div id="form" className="col-md-4">
                            <Form functionCallFromParent={this.parentFunction.bind(this)} />
                        </div>
                        <div id="content" className="col-md-8">
                            <Content valueFromParent={this.state.key} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;