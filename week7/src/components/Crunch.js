import React, {Component} from 'react'

class Crunch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Crunches: 0
        };
    };

render() {

    return(
        <div>
            <h2>Crunches: {this.state.Crunches}</h2>
            <button onClick={() => this.setState({Crunches: this.state.Crunches + 1})}>Crunch Reps</button>
            <button onClick={() => this.setState({Crunches: 0})}>Reset Crunches</button>
        </div>
    );
}
}

export default Crunch;