import React from 'react';
// import { css, StyleSheet } from 'aphrodite';
import styled from 'styled-components';

export default class SocialMediaBar extends React.Component {
  render() {
    return (
      // <div className={css(styles.socialMediaBarContainer)}>
      <div>
        <h1>This is so SocialMsdfsaediaBar!</h1>
        <ContainerDiv>In the container div</ContainerDiv>
      </div>
    );
  }
}

// const styles = {
//   socialMediaBarContainer: {
//     dislay: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// };

const ContainerDiv = styled.div`
  background-color: #dddddd;
  color: #895fad;
  font-size: 40px;
`;
