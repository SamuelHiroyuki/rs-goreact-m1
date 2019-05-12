import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./components/Button";
import Aside from "./components/Aside";

class App extends Component {
    hendleClick() {
        alert("3,1415926535897932384");
    }

    render() {
        return (
            <>
                <h1>Hello</h1>
                <Button onClick={this.hendleClick} />
                <Fragment>
                    <h2>World</h2>
                    <Button title="EU SOU SEU PAI!!!!!!!!!" />
                </Fragment>
                <Aside>
                    <strong>X1?</strong>
                </Aside>
            </>
        );
    }
}

render(<App />, document.getElementById("app"));
