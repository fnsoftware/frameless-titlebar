import 'styles/App.css';
import React, { Component } from 'react';
import { Default, GitHub } from 'components/examples';
import ListItem from 'components/ListItem';

const platforms = [
  'default',
  'win32',
  'linux',
  'darwin'
];

const styles = [
  'default',
  'github'
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'default',
      platform: 'default'
    };
  }

  switchPlatform = (platform) => {
    this.setState({ platform });
  };

  switchStyle = (style) => {
    this.setState({ style });
  };

  renderChildren = () => {
    return (
      <div className="Children">
        <h1>Styles</h1>
        {
          styles.map((style) => (
            <ListItem
              key={style}
              onClick={() => this.switchStyle(style)}
              selected={style === this.state.style}
            >
              {style}
            </ListItem>
          ))
        }
        <h1>Platforms</h1>
        {
          platforms.map((platform) => (
            <ListItem
              key={platform}
              onClick={() => this.switchPlatform(platform)}
              selected={platform === this.state.platform}
            >
              {platform}
            </ListItem>
          ))
        }
      </div>
    )
  };

  render() {
    const {
      style,
      platform
    } = this.state;

    switch (style) {
      case 'github':
        return (
          <GitHub platform={platform}>
            {this.renderChildren()}
          </GitHub>
        )
      default:
        return (
          <Default platform={platform}>
            {this.renderChildren()}
          </Default>
        );
    }
  }
}

export default App;
