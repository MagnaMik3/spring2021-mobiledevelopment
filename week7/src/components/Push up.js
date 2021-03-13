import React, {Component} from 'react'

class Pushup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pushes: 0
        };
    };

render() {

    return(
        <div>
            <h2>Push ups: {this.state.pushes}</h2>
            <button onClick={() => this.setState({pushes: this.state.pushes + 1})}>Push up</button>
            <button onClick={() => this.setState({pushes: this.state.pushes + 5})}>Push up rep</button>
            <button onClick={() => this.setState({pushes: 0})}>Reset Push ups</button>
        </div>
    );
}
}

export default Pushup;