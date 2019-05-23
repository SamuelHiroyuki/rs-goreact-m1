import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        title: "EU SOU JESUS!!!!"
    };

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return <button onClick={this.props.onClick}>{this.props.title}</button>;
    }
}
