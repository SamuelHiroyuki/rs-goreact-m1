import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.title || "EU SOU JESUS!!!!"}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};
