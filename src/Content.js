import React from "react";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ 
            ...this.state, 
            [event.target.name]: value
        });
        console.log(event.target.value);
    }

    render() {
        return (
            <form>
                <div className="form-group" onChange={this.handleChange}>
                    <div className="form-check-inline">
                        <input type="radio" value="A" name="car" /> A
                        <input type="radio" value="B" name="car" /> B
                        <input type="radio" value="C" name="car" /> C
                    </div>
                    <div>
                        <label>
                            Etäisyys:
                            <input type="number" placeholder="km" id="distance" name="distance" min="0" value={this.state.distance} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Nopeus 1:
                            <input type="number" placeholder="km/h" id="speed1" name="speed1" min="0" value={this.state.speed1}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Nopeus 2:
                            <input type="number" placeholder="km/h" id="speed2" name="speed2" min="0" value={this.state.speed2} />
                        </label>
                    </div>
                </div>
            </form>
        );
    }
}

class Cards extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    Testing cards
                </div>
                <div className="card">
                    Second card
                </div>
            </div>
        )
    }
}

function Content() {
    return (
        <div className="row">
            <div className="col-md-4 border-right">
                <InputForm></InputForm>
            </div>
            <div className="col-md-8">
                <Cards></Cards>
            </div>
        </div>
    )
}

export default Content;
