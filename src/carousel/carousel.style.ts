import styled from 'styled-components';

export const StyledCarousel = styled.div`
  position: relative;
`;

export const StyledWindow = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  overflow: hidden;
`;

export const StyledTrack = styled.div<{ width: number; translateX: number }>`
  width: ${(props) => props.width}px;
  transition: transform 0.3s ease-out;
  transform: translateX(-${(props) => props.translateX}px);

  > * {
    float: left;
  }
`;

export const StyledIndicators = styled.ol`
  position: absolute;
  left: 10px;
  bottom: 10px;
  padding: 0;
  margin: 0 auto;
  line-height: 8px;
  list-style: none;
  text-align: center;
`;

export const StyledIndicator = styled.li<{ active: boolean }>`
  float: left;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  opacity: 0.2;
  background: #282c34;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  ${(props) =>
  props.active &&
  `
    opacity: 1;
  `};
`;
