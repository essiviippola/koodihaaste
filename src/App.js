import React from "react";

import "./App.css";
import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"

function App() {
    return(
        <div className="App">
            <Header></Header>
            <p>Moi Sami!</p>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}

export default App;