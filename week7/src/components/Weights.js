import React, {Component} from 'react'

class Lift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Lifts: 0
        };
    };

render() {

    return(
        <div>
            <h2>Crunches: {this.state.Lifts}</h2>
            <button onClick={() => this.setState({Lifts: this.state.Lifts + 1})}>Weight Lift</button>
            <button onClick={() => this.setState({Lifts: this.state.Lifts + 5})}>Weight Rep</button>
            <button onClick={() => this.setState({Lifts: 0})}>Reset Lifts</button>
        </div>
    );
}
}

export default Lift;