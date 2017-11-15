import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class SocialMediaBar extends React.Component {
  render() {
    console.log(this.props);
    let { bgColor, iconColor, iconSize, vertical } = this.props;
    return (
      <div>
        <h1>This is so SocialMsdfsaediaBar!</h1>
        <ContainerDiv
          bgColor={bgColor}
          iconColor={iconColor}
          iconSize={iconSize}
          vertical={vertical}
        >
          <p>In the container div</p>
          <h2>In the container div</h2>
          <button>In the container div</button>
        </ContainerDiv>
      </div>
    );
  }
}

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: ${({ vertical }) => 'column'};
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ iconColor }) => iconColor};
  font-size: ${({ iconSize }) => iconSize};
`;

ContainerDiv.propTypes = {
  bgColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  vertical: PropTypes.boolean
};

ContainerDiv.defaultProps = {
  bgColor: 'rgba(0, 0, 0, 0)',
  iconColor: '#FFF',
  iconSize: '1em',
  vertical: false
};
