import React from "react";
import { calculateConsumption, calculateConsumptionDifference, calculateConsumptionPer100Km, calculateTime, calculateTimeDifference } from "./Utils.js";

class Content extends React.Component {

    render() {

        const car = this.props.valueFromParent.car;
        const distance = Math.abs(this.props.valueFromParent.distance);
        const speed1 = Math.abs(this.props.valueFromParent.speed1);
        const speed2 = Math.abs(this.props.valueFromParent.speed2);

        const consumption1 = calculateConsumption(car, distance, speed1);
        const consumption2 = calculateConsumption(car, distance, speed2);
        const consumptionDifference = calculateConsumptionDifference(car, distance, speed1, speed2);

        const consumptionPer100Km1 = calculateConsumptionPer100Km(car, speed1);
        const consumptionPer100Km2 = calculateConsumptionPer100Km(car, speed2);

        const time1 = calculateTime(distance, speed1);
        const time2 = calculateTime(distance, speed2);
        const timeDifference = calculateTimeDifference(distance, speed1, speed2);

        const slowerSpeed = Math.min(speed1, speed2);
        const fasterSpeed = Math.max(speed1, speed2);

        return (
            <section id="content">
                {timeDifference && consumptionDifference ?
                    <div>
                        <hr />
                        <p className="content-summary">
                            Ajamalla nopeuden {fasterSpeed} km/h sijaan nopeudella {slowerSpeed} km/h,
                            matkassa kestää
                            <span className="emphasize"> {timeDifference} </span>
                            kauemmin ja polttoainetta säästyy
                            <span className="emphasize"> {consumptionDifference} l</span>
                            </p>
                        <hr />
                    </div>
                    : null}
                <div className="row content-details">
                    <div className="col">
                        {time1 ? <p>Matkaan kuluva aika nopeudella {speed1} km/h: <strong>{time1}</strong></p> : null}
                        {time2 && (time1 !== time2) ? <p>Matkaan kuluva aika nopeudella {speed2} km/h: <strong>{time2}</strong></p> : null}
                    </div>
                    <div className="col">
                        {consumption1 ? <p>Kokonaiskulutus nopeudella {speed1} km/h: <strong>{consumption1} l</strong></p> : null}
                        {consumption2 && (consumption1 !== consumption2) ? <p>Kokonaiskulutus nopeudella {speed2} km/h: <strong>{consumption2} l</strong></p> : null}
                    </div>
                    <div className="col">
                        {consumption1 ? <p>Keskikulutus nopeudella {speed1} km/h: <strong>{consumptionPer100Km1} l/100km</strong></p> : null}
                        {consumption2 && (consumption1 !== consumption2) ? <p>Keskikulutus nopeudella {speed2} km/h: <strong>{consumptionPer100Km2} l/100km</strong></p> : null}
                    </div>
                </div>

            </section>
        );
    }
}

export default Content;
