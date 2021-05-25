import React from "react";

class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert("A name was submitted: " + this.state.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function Content(){
    return(
        <div class="row">
            <div class="col-md-4 border-right">
                <p>Eka sarake</p>
                <NameForm></NameForm>
            </div>
            <div class="col-md-8">
                <p>Toinen sarake</p>
            </div>
        </div>
    )
}

export default Content;
