import React from 'react';
import './App.css';

import SocialMediaBar from 'react-social-media-bar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        This is our SocialMediaBar component:
        <SocialMediaBar
          // vertical
          bgColor="#FFD700"
          iconColor="#895FAD"
          iconSize={'40px'}
          icons={ICONS}
          padding={{ top: '6px', left: '3px', right: '12px', bottom: '9px' }}
          iconOpacity={0}
          hoverOpacity={1}
        />
      </div>
    );
  }
}

const ICONS = [
  {
    media: 'quora',
    link: 'https://quora.com',
    iconColor: '#289079',
    iconSize: '20px'
  },
  {
    media: 'facebook',
    link: 'https://facebook.com',
    iconColor: 'green',
    iconOpacity: 0.5,
    hoverOpacity: 1,
    sameTab: true
  },
  {
    media: 'twitter',
    link: 'https://twitter.com',
    hoverColor: 'black',
    iconOpacity: 0.5,
    hoverOpacity: 1,
    margin: {
      top: '12px',
      right: '14px',
      left: '100px',
      bottom: '1px'
    },
    padding: {
      top: '12px',
      right: '14px',
      left: '100px',
      bottom: '1px'
    }
  }
];

export default App;
