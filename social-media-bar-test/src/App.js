import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import SocialMediaBar from 'react-social-media-bar';

class App extends React.Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <h1 className={css(styles.header)}>React Social Media Bar</h1>
        <a
          className={css(styles.link)}
          href="https://github.com/rahrang/react-social-media-bar/"
          target="_blank"
        >
          GitHub Page
        </a>
        <h3>This is a mininally-styled SocialMediaBar</h3>
        <SocialMediaBar icons={MINIMAL_ICONS} />
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

const MINIMAL_ICONS = [
  {
    media: 'instagram',
    link: 'https://instagram.com/rahrang'
  },
  {
    media: 'github',
    link: 'https://github.com/rahrang'
  },
  {
    media: 'linkedin',
    link: 'https://linkedin.com/in/rahrang'
  }
];

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

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    fontSize: '1.5em',
    fontColor: '#333'
  },

  link: {
    textDecoration: 'none'
  }
});

export default App;
