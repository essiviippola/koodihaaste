import React from "react";
import { calculateConsumption, calculateConsumptionDifference, calculateTime, calculateTimeDifference } from "./Utils.js";

class Content extends React.Component {

    render() {

        const car = this.props.valueFromParent.car;
        const distance = this.props.valueFromParent.distance;
        const speed1 = this.props.valueFromParent.speed1;
        const speed2 = this.props.valueFromParent.speed2;

        return (
            <div id="content">
                <div className="row">
                    <div className="col">
                        <h2>Kulutus</h2>
                        <p>Kulutus: {calculateConsumption(car, distance, speed1)}</p>
                        <p>Vertailtava kulutus: {calculateConsumption(car, distance, speed2)}</p>
                        <p>Ero kulutuksessa: {calculateConsumptionDifference(car, distance, speed1, speed2)}</p>
                    </div>
                    <div className="col">
                        <h2>Aika</h2>
                        <p>Aika: {calculateTime(distance, speed1)}</p>
                        <p>Vertailtava aika: {calculateTime(distance, speed2)}</p>
                        <p>Ero ajassa: {calculateTimeDifference(distance, speed1, speed2)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
