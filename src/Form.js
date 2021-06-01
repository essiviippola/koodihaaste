import React from "react";

class Form extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            car: "",
            distance: "",
            speed1: "",
            speed2: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState(
            {...this.state, [event.target.name]: value},
            function(){
                this.props.functionCallFromParent(this.state);
            })
    }

    render() {
        return (
            <form>
                <div className="form-group" onChange={this.handleChange}>

                    <div>
                        <input type="radio" value="A" name="car" id="car-a" className="form-check-inline"/>
                        <label htmlFor="car-a" className="inline-option">Auto A</label>
                        <input type="radio" value="B" name="car" id="car-b" className="form-check-inline"/> 
                        <label htmlFor="car-b" className="inline-option">Auto B</label>
                        <input type="radio" value="C" name="car" id="car-c" className="form-check-inline"/>
                        <label htmlFor="car-c" className="inline-option">Auto C</label>
                    </div><br/>

                    <div>
                        <label htmlFor="distance">Etäisyys</label>
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" id="distance" name="distance" min="0" />
                            <span className="input-group-text">km</span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="speed1">Nopeus</label>
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" id="speed1" name="speed1" min="0"/>
                            <span className="input-group-text">km/h</span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="speed2">Vertailtava nopeus</label>
                        <div className="input-group mb-3">
                        <input type="number" className="form-control" id="speed2" name="speed2" min="0"/>
                        <span className="input-group-text">km/h</span>
                        </div>
                    </div>
                    
                </div>
            </form>
        );
    }
}

export default Form;