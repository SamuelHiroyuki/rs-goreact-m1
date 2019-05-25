import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        title: "+"
    };

    render() {
        return <button onClick={this.props.onClick}>{this.props.title}</button>;
    }
}
