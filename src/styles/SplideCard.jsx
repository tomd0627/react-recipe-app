import styled from "styled-components";

export const SplideCard = styled.div`
  border-radius: 2rem;
  min-height: 25rem;
  overflow: hidden;
  position: relative;

  p {
    align-items: center;
    bottom: 0;
    color: #fff;
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    justify-content: center;
    height: 40%;
    left: 50%;
    margin: 0;
    padding: 0 2rem;
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
    width: 100%;
    z-index: 10;
  }

  img {
    border-radius: 2rem;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const SplideCardGradient = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;
`;
