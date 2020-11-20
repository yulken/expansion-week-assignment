import styled, { css } from 'styled-components';
import banner from '../../assets/banner.jpg';

interface ContainerProps {
  isBlurry: boolean;
}

interface ModalProps {
  isVisible: boolean;
  isDiplayed: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${props =>
    props.isBlurry &&
    css`
      filter: blur(10px);
    `}
  transition: filter 1s;
  header {
    position: relative;
    background-color: #e1e1e1;
    display: flex;
    justify-content: center;
  }

  header div {
    background: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    filter: blur(2px) brightness(90%);
    border-bottom: #121212 solid 1px;
    padding: 150px;
    width: 100%;
  }

  header h1 {
    font-size: 40px;
    position: absolute;
    top: calc(50% - 40px);
    left: 50%;
    transform: translateX(-50%);
    text-shadow: #121212 1px 1px;
  }

  section {
    font-size: 18px;
    background-color: #f3f3f3;
    max-width: 1050px;
    width: 100%;
    margin: auto;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main h2 {
    margin-top: 50px;
    margin-left: 50px;
    align-self: flex-start;
  }

  main p {
    padding: 20px;
  }

  main ul {
    padding-left: 50px;
    align-self: flex-start;
  }

  figure {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  figure figcaption {
    margin-top: 10px;
    font-size: 14px;
  }

  a {
    text-decoration: none;
    font-style: italic;
    color: red;
    transition: color 0.2s;
  }
  a:hover {
    color: rgb(255, 98, 98);
  }
`;

export const Modal = styled.div<ModalProps>`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 1s;
  ${props =>
    props.isVisible &&
    css`
      opacity: 1;
    `}
  ${props =>
    props.isDiplayed &&
    css`
      display: block;
    `}
  div {
    position: relative;
    background-color: #e1e1e1;
    font-size: 20px;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #e1e1e1;
    width: 70%;
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: column;

    video {
      height: 200px;
      border-radius: 5%;

      flex: 1;
    }
    div {
      margin: 0;
      padding: 0;
      margin-top: 20px;
      text-align: center;
    }
  }

  a {
    position: absolute;
    right: 20px;
    bottom: 10px;
    color: #000;
    font-size: 28px;
    font-weight: bold;
    transition: color 0.2s;
  }

  a:hover,
  a:focus {
    color: red;
  }
`;
