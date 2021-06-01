import React from "react";
import {calculateConsumption, calculateConsumptionDifference, calculateTime, calculateTimeDifference} from "./Utils.js";

class Content extends React.Component {

    render() {

        const car = this.props.valueFromParent.car;
        const distance = this.props.valueFromParent.distance;
        const speed1 = this.props.valueFromParent.speed1;
        const speed2 = this.props.valueFromParent.speed2;
        
        return (
            <div id="content" className="row">
                <div className="col-md-4">
                    <div>
                        <h2>Kulutus</h2>
                        <p>Kulutus: {calculateConsumption(car, distance, speed1)}</p>
                        <p>Vertailtava kulutus: {calculateConsumption(car, distance, speed2)}</p>
                        <p>Ero kulutuksessa: {calculateConsumptionDifference(car, distance, speed1, speed2)}</p>
                    </div>
                    <div>
                        <h2>Päästöt</h2>
                        <p>Päästöt: </p>
                        <p>Vertailtavat päästöt: </p>
                        <p>Erotus päästöissä: </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h2>Nopeus</h2>
                        <p>Nopeus: {calculateTime(distance, speed1)}</p>
                        <p>Vertailtava nopeus: {calculateTime(distance, speed2)}</p>
                        <p>Erotus nopeudessa: {calculateTimeDifference(distance, speed1, speed2)}</p>
                    </div>
                    <div>
                        <h2>Hinta</h2>
                        <p>Hinta: </p>
                        <p>Vertailtava hinta: </p>
                        <p>Erotus hinnoissa: </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
