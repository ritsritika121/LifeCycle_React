import React from 'react';
import Content from './child';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber() {
        this.setState({ data: this.state.data + 1 })
    }

    componentWillMount() {
        console.log("PARENT", 'Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log("PARENT", 'Component DID MOUNT!')
    }
    // componentWillReceiveProps(newProps) {
    //     console.log("PARENT", 'Component WILL RECIEVE PROPS!')
    // }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("PARENT", 'Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("PARENT", 'Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log("PARENT", 'Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content ></Content>
            </div>
        );
    }
}

export default App;