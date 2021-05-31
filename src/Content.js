import React from "react";

let car = this.props.valueFromParent.car;
let distance = this.props.valueFromParent.distance;
let speed1 = this.props.valueFromParent.speed1;
let speed2 = this.props.valueFromParent.speed2;

class Content extends React.Component {
    render() {
        return (
            <div id="content" className="row">
                <div className="col-md-4">
                    <div className="card">
                        <h2>Kulutus</h2>
                        <p>Car: {car}</p>
                    </div>
                    <div className="card">
                        <h2>Päästöt</h2>
                        <p>Distance: {distance}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <h2>Nopeus</h2>
                        <p>Speed 1: {speed1}</p>
                    </div>
                    <div className="card">
                        <h2>Hinta</h2>
                        <p>Speed2: {speed2}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
