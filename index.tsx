import React, { Component } from 'react';
import { render } from 'react-dom';
import { CardConfig } from './Config';
import Hello from './Hello';
import zrender from './RenderUtils';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div className="card-container">
          {CardConfig.map((config) => zrender(config))}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
