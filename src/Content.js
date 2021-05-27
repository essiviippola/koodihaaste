import React from "react";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form>
                <div onChange={this.state.value} class="form-check-inline">
                    <input type="radio" class="form-check-input" value="A" name="car" /> A
                    <input type="radio" class="form-check-input" value="B" name="car" /> B
                    <input type="radio" class="form-check-input" value="C" name="car" /> C
                </div>
                <div onChange={this.state.value}>
                    <label>
                        Etäisyys:
                        <input class="form-control" type="number" placeholder="km" id="distance" name="distance" min="0" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div onChange={this.state.value}>
                    <label>
                        Nopeus 1:
                        <input class="form-control" type="number" placeholder="km" id="distance" name="distance" min="0" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div onChange={this.state.value}>
                    <label>
                        Nopeus 2:
                        <input class="form-control" type="number" placeholder="km" id="distance" name="distance" min="0" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
            </form>
        );
    }
}

function Content() {
    return (
        <div class="row">
            <div class="col-md-4 border-right">
                <p>Eka sarake</p>
                <InputForm></InputForm>
            </div>
            <div class="col-md-8">
                <p>Toinen sarake</p>
            </div>
        </div>
    )
}

export default Content;
