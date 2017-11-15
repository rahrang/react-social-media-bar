import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class SocialMediaBar extends React.Component {
  render() {
    console.log(this.props);

    let {
      icons,
      bgColor,
      iconColor,
      brandColors,
      iconSize,
      vertical,
      hoverOpacity,
      hoverColor,
      sameTab
    } = this.props;

    let generatedIcons = icons.map((icon, index) => {
      let {
        link,
        iconColor,
        iconOpacity,
        iconSize,
        hoverOpacity,
        hoverColor,
        sameTab,
        margin,
        padding
      } = icon;
      return (
        <IconAnchor
          key={`${icon.media}_${index}`}
          href={icon.link}
          target={icon.sameTab ? '_self' : '_blank'}
          iconColor={icon.iconColor || iconColor}
          iconOpacity={icon.iconOpacity || iconOpacity}
          iconSize={icon.iconSize || iconSize}
          hoverOpacity={icon.hoverOpacity || hoverOpacity}
          hoverColor={icon.hoverColor || hoverColor}
          margin={icon.margin || margin}
          padding={icon.padding || padding}
        >
          <i className={`fa-${icon.media} fa`} aria-hidden="true" />
        </IconAnchor>
      );
    });

    return (
      <div>
        <h1>This is so SocialMsdfsaediaBar!</h1>
        <ContainerDiv bgColor={bgColor} vertical={vertical}>
          {generatedIcons}
        </ContainerDiv>
      </div>
    );
  }
}

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: ${({ vertical }) => vertical && 'column'};
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
`;

ContainerDiv.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  bgColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconOpacity: PropTypes.number,
  iconSize: PropTypes.string,
  vertical: PropTypes.bool,
  sameTab: PropTypes.bool,
  hoverOpacity: PropTypes.number,
  hoverColor: PropTypes.string,
  margin: PropTypes.objectOf(PropTypes.string),
  padding: PropTypes.objectOf(PropTypes.string)
};

ContainerDiv.defaultProps = {
  icons: [],
  bgColor: 'rgba(0, 0, 0, 0)',
  iconColor: '#FFF',
  iconOpacity: 1,
  iconSize: '1em',
  vertical: false,
  sameTab: false,
  hoverOpacity: 1,
  hoverColor: '#FFF',
  margin: {
    top: '5px',
    right: '5px',
    bottom: '5px',
    left: '5px'
  },
  padding: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0'
  }
};

const IconAnchor = styled.a`
  text-decoration: none;
  color: ${({ iconColor }) => iconColor};
  opacity: ${({ iconOpacity }) => iconOpacity};
  font-size: ${({ iconSize }) => iconSize};
  margin-top: ${({ margin }) => margin.top};
  margin-left: ${({ margin }) => margin.left};
  margin-right: ${({ margin }) => margin.right};
  margin-bottom: ${({ margin }) => margin.bottom};
  padding-top: ${({ padding }) => padding.top};
  padding-left: ${({ padding }) => padding.left};
  padding-right: ${({ padding }) => padding.right};
  padding-bottom: ${({ padding }) => padding.bottom};
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    opacity: ${({ hoverOpacity }) => hoverOpacity};
  }
`;

IconAnchor.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  iconOpacity: PropTypes.number,
  iconSize: PropTypes.string,
  hoverOpacity: PropTypes.number,
  hoverColor: PropTypes.string,
  sameTab: PropTypes.bool,
  margin: PropTypes.objectOf(PropTypes.string),
  padding: PropTypes.objectOf(PropTypes.string)
};

IconAnchor.defaultProps = {
  link: '/',
  iconColor: '#FFF',
  iconOpacity: 1,
  iconSize: '1em',
  hoverOpacity: 1,
  hoverColor: '#FFF',
  sameTab: false,
  margin: {
    top: '5px',
    right: '5px',
    bottom: '5px',
    left: '5px'
  },
  padding: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0'
  }
};
