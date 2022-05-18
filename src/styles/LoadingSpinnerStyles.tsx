import styled from 'styled-components';
import colors from 'styles/colors';

interface Props {
  color: string;
  top: number;
  right: number;
  left: number;
  bottom: number;
}


const Circle = styled.div`
  position: absolute;
  border: 2x solid ${colors.tan};
  animation: load 1s infinite linear;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


const Circle2 = styled(Circle)<Props>`
 margin-top: ${props => props.top}px;
  margin-right: ${props => props.right}px;
  margin-bottom: ${props => props.bottom}px;
  margin-left: ${props => props.left}px;
  border-left: 2px solid ${props => props.color};
  border-right: 1px solid ${props => props.color};

`
export { Circle, Circle2 } ;
