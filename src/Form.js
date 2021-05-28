import React from "react";

class Form extends React.Component {
    
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
        console.log(event.target.name + ":" + event.target.value);
    }

    render() {
        return (
            <form>
                <div className="form-group" onChange={this.handleChange}>

                    <div className="form-check-inline">
                        <input type="radio" value="A" name="car" /> A
                        <input type="radio" value="B" name="car" /> B
                        <input type="radio" value="C" name="car" /> C
                    </div><br/><br/>

                    <div>
                        <label>Etäisyys:</label>
                        <input type="number" placeholder="km" id="distance" name="distance" min="0" />
                    </div><br/>

                    <div>
                        <label>Nopeus 1:</label>
                        <input type="number" placeholder="km/h" id="speed1" name="speed1" min="0"/>
                    </div><br/>

                    <div>
                        <label>Nopeus 2:</label>    
                        <input type="number" placeholder="km/h" id="speed2" name="speed2" min="0"/>
                    </div>
                    
                </div>
            </form>
        );
    }
}

export default Form;