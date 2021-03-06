import styled from "styled-components";

const LoadingModalStyles = styled.div`
  background-color: rgb(13, 71, 161, 0.4);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  .loading-modal {
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    box-shadow: 0 -3em rgba(255, 193, 7, 1),
      2.25em -2.25em rgba(255, 193, 7, 0.875), 3em 0 rgba(255, 193, 7, 0.75),
      2.25em 2.25em rgba(255, 193, 7, 0.625), 0 3em rgba(255, 193, 7, 0.5),
      -2.25em 2.25em rgba(255, 193, 7, 0.375), -3em 0 rgba(255, 193, 7, 0.25),
      -2.25em -2.25em rgba(255, 193, 7, 0.125);
    animation: spin 1.2s linear infinite;
  }
  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export default LoadingModalStyles;
