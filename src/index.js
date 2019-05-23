import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./components/Button";
import Aside from "./components/Aside";

class App extends Component {
    state = {
        counter: 0
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.counter <= 10;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.counter);
    }

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    render() {
        return (
            <>
                <h1>Hello</h1>
                <Button onClick={this.handleClick} />
                <Fragment>
                    <h2>World</h2>
                    <Button title="EU SOU SEU PAI!!!!!!!!!" />
                </Fragment>
                <Aside>
                    <strong>{this.state.counter}</strong>
                </Aside>
            </>
        );
    }
}

render(<App />, document.getElementById("app"));
