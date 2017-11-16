import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as _ from 'lodash';

export default class SocialMediaBar extends React.Component {
  render() {
    let {
      icons,
      bgColor,
      iconColor,
      iconOpacity,
      iconSize,
      hoverColor,
      hoverOpacity,
      margin,
      padding,
      sameTab,
      vertical
    } = this.props;

    let generatedIcons = icons.map((icon, index) => {
      return (
        <IconAnchor
          key={`${icon.media}_${index}`}
          href={icon.link}
          target={setTarget(icon.sameTab, sameTab)}
          rel={'noopener noreferrer'}
          iconColor={icon.iconColor || iconColor}
          iconOpacity={setOpacity(icon.iconOpacity, iconOpacity)}
          iconSize={icon.iconSize || iconSize}
          hoverOpacity={setOpacity(icon.hoverOpacity, hoverOpacity)}
          hoverColor={icon.hoverColor || hoverColor}
          margin={icon.margin || margin}
          padding={icon.padding || padding}
        >
          <i className={`fa-${icon.media} fa`} aria-hidden="true" />
        </IconAnchor>
      );
    });

    return (
      <ContainerDiv bgColor={bgColor} vertical={vertical}>
        {generatedIcons}
      </ContainerDiv>
    );
  }
}

const ContainerDiv = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  flex-direction: ${({ vertical }) => vertical && 'column'};
  align-items: center;
  justify-content: center;
`;

ContainerDiv.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  bgColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconOpacity: PropTypes.number,
  iconSize: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverOpacity: PropTypes.number,
  margin: PropTypes.objectOf(PropTypes.string),
  padding: PropTypes.objectOf(PropTypes.string),
  sameTab: PropTypes.bool,
  vertical: PropTypes.bool
};

ContainerDiv.defaultProps = {
  icons: [],
  bgColor: 'rgba(0, 0, 0, 0)',
  iconColor: '#000',
  iconOpacity: 1,
  iconSize: '1em',
  hoverColor: '',
  hoverOpacity: 1,
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
  },
  sameTab: false,
  vertical: false
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
    color: ${({ hoverColor, iconColor }) =>
      !_.isUndefined(hoverColor) ? hoverColor : iconColor};
    opacity: ${({ hoverOpacity }) => hoverOpacity};
  }
`;

IconAnchor.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  iconOpacity: PropTypes.number,
  iconSize: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverOpacity: PropTypes.number,
  margin: PropTypes.objectOf(PropTypes.string),
  padding: PropTypes.objectOf(PropTypes.string),
  sameTab: PropTypes.bool
};

IconAnchor.defaultProps = {
  href: '/',
  target: '_blank',
  iconColor: '#000',
  iconOpacity: 1,
  iconSize: '1em',
  hoverColor: '#000',
  hoverOpacity: 1,
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
  },
  sameTab: false
};

const setOpacity = (opacity, parentOpacity) => {
  return !_.isUndefined(opacity) ? opacity : parentOpacity;
};

const setTarget = (sameTab, parentSameTab) => {
  if (!_.isUndefined(sameTab)) {
    return sameTab ? '_self' : '_blank';
  } else {
    return parentSameTab ? '_self' : '_blank';
  }
};
