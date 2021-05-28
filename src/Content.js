import React from "react";

class Content extends React.Component{
    render(){
        return(
            <div>
                <div className="card">
                    <p>Car: {this.props.valueFromParent.car}</p>
                </div>
                <div className="card">
                    <p>Distance: {this.props.valueFromParent.distance}</p>
                </div>
                <div className="card">
                    <p>Speed 1: {this.props.valueFromParent.speed1}</p>
                </div>
                <div className="card">
                    <p>Speed2: {this.props.valueFromParent.speed2}</p>
                </div>
            </div>
        );
    }
}

export default Content;
