import React, { Component } from "react";

export default class Aside extends Component {
    render() {
        return <aside>{this.props.children}</aside>;
    }
}
