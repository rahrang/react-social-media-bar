import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import SocialMediaBar from 'react-social-media-bar';

const EXTERNAL_LINKS = [
  {
    text: 'GitHub Repository',
    link: 'https://github.com/rahrang/react-social-media-bar/'
  },
  {
    text: 'Source Code',
    link:
      'https://github.com/rahrang/react-social-media-bar/blob/master/examples/src/App.js'
  },
  {
    text: 'NPM Page',
    link: 'https://www.npmjs.com/package/react-social-media-bar'
  }
];

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

class App extends React.Component {
  render() {
    return (
      <div className={css(styles.pageContainer)}>
        <h1 className={css(styles.header)}>React Social Media Bar</h1>
        <div className={css(styles.linkContainer)}>
          {EXTERNAL_LINKS.map(l => {
            return (
              <a
                className={css(styles.link)}
                href={l.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.text}
              </a>
            );
          })}
        </div>
        <div className={css(styles.container)}>
          <h3 className={css(styles.h3)}>
            This is a minimally-styled SocialMediaBar -- all properties other
            than "icons" are at the default values.
          </h3>
          {/* Look for the declaration of MININAL_ICONS near the top of this file. */}
          <SocialMediaBar icons={MINIMAL_ICONS} />
        </div>
        <div className={css(styles.container)}>
          <h3 className={css(styles.h3)}>
            This is the same minimally-styled SocialMediaBar, but vertical with
            the links opening in this tab.
          </h3>
          <SocialMediaBar icons={MINIMAL_ICONS} vertical sameTab />
        </div>
        <div className={css(styles.container)}>
          <h3 className={css(styles.h3)}>
            This is a SocialMediaBar, with the styles passed into the component
            as properties, not as key-value pairs in the "icons" property.
          </h3>
          <SocialMediaBar
            bgColor={'#289089'}
            icons={MINIMAL_ICONS}
            iconColor={'#FFD700'}
            iconOpacity={0.75}
            iconSize={'1.5em'}
            hoverColor={'#895FAD'}
            hoverOpacity={0.9}
            margin={{
              top: '10px',
              left: '10px',
              right: '10px',
              bottom: '12px'
            }}
            padding={{
              top: '3px',
              left: '2px',
              right: '2px',
              bottom: '3px'
            }}
          />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
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

  container: {
    margin: '15px'
  },

  h3: {
    fontSize: '1em',
    fontWeight: '300'
  },

  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },

  link: {
    border: '1px solid #289089',
    borderRadius: '3px',
    color: '#289089',
    margin: '10px',
    padding: '5px 10px',
    textDecoration: 'none',
    ':hover': {
      color: '#FFF',
      backgroundColor: '#289089'
    }
  }
});

export default App;
