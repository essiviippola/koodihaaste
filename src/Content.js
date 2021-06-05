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
        const consumptionDifference = calculateConsumptionDifference(car, distance, speed1, speed2);

        const time1 = calculateTime(distance, speed1);
        const time2 = calculateTime(distance, speed2);
        const timeDifference = calculateTimeDifference(distance, speed1, speed2);

        return (
            <div id="content">
                <hr/>
                <div>
                    <h3>
                    Ajamalla nopeuden {speed1} km/h sijaan nopeudella {speed2} km/h, 
                    matkassa kestää 
                    <span> {timeDifference} </span>
                    kauemmin ja polttoainetta kuluu 
                    <span> {consumptionDifference} </span>
                    vähemmän. 
                    </h3>
                </div>
                <hr/>
                <div>
                    <p>Aika valitulla nopeudella: {time1}</p>
                    <p>Aika vertailunopeudella: {time2}</p>
                    <br/>
                    <p>Kulutus valitulla nopeudella: {consumption1}</p>
                    <p>Kulutus vertailunopeudella: {consumption2}</p>
                </div>

            </div>
        );
    }
}

export default Content;
