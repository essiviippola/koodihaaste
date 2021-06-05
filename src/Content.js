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
                {timeDifference && consumptionDifference ?
                    <div>
                        <hr />
                        <h2>
                            Ajamalla {speed1} km/h sijaan {speed2} km/h,
                                matkassa kestää
                                <span className="emphasize"> {timeDifference} </span>
                                kauemmin ja polttoainetta kuluu
                                <span className="emphasize"> {consumptionDifference} </span>
                                vähemmän.
                            </h2>
                        <hr />
                    </div>
                    : null}
                <div className="row">
                    <div className="col">
                        {time1 ? <p>Aika nopeudella {speed1} km/h: <strong>{time1}</strong></p> : null}
                        {time2 ? <p>Aika nopeudella {speed2} km/h: <strong>{time2}</strong></p> : null}
                    </div>
                    <div className="col">
                        {consumption1 ? <p>Kulutus nopeudella {speed1} km/h: <strong>{consumption1}</strong></p> : null}
                        {consumption2 ? <p>Kulutus nopeudella {speed2} km/h: <strong>{consumption2}</strong></p> : null}
                    </div>
                </div>

            </div>
        );
    }
}

export default Content;
