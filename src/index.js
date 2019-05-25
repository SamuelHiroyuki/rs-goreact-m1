import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './components/Button';
import Aside from './components/Aside';

import './style.scss';

class App extends Component {
	state = {
	  counter: 0,
	};

	handleClick = () => {
	  this.setState({ counter: this.state.counter + 1 });
	};

	render() {
	  return (
  <>
    <h1>Hello</h1>
    <h2>{this.state.counter}</h2>
    <Button onClick={this.handleClick} />
  </>
	  );
	}
}

render(<App />, document.getElementById('app'));
