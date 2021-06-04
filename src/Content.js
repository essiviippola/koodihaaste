import React from "react";
import { calculateConsumption, calculateConsumptionDifference, calculateTime, calculateTimeDifference } from "./Utils.js";

class Content extends React.Component {

    render() {

        const car = this.props.valueFromParent.car;
        const distance = this.props.valueFromParent.distance;
        const speed1 = this.props.valueFromParent.speed1;
        const speed2 = this.props.valueFromParent.speed2;

        const consumption1 = calculateConsumption(car, distance, speed1);
        const consumption2 = calculateConsumption(car, distance, speed2);
        const consumptionDifference = calculateConsumptionDifference(car, distance, speed1, speed2)

        const time1 = calculateTime(distance, speed1);
        const time2 = calculateTime(distance, speed2);
        const timeDifference = calculateTimeDifference(distance, speed1, speed2);

        return (
            <div id="content">
                <div className="row">
                    <div className="col">
                        <h2><span class="icon-h2"><i className="fas fa-charging-station"></i></span> Kulutus</h2>
                        <p>Ero kulutuksessa:</p>
                        <h3>{consumptionDifference}</h3>
                        <p>Kulutus: {consumption1}</p>
                        <p>Vertailtava kulutus: {consumption2}</p>
                    </div>
                    <div className="col">
                        <h2><span class="icon-h2"><i className="far fa-clock"></i></span> Aika</h2>
                        <p>Ero ajassa:</p>
                        <h3>{timeDifference}</h3>
                        <p>Aika: {time1}</p>
                        <p>Vertailtava aika: {time2}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
