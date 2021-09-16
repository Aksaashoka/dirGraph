import styled from "styled-components/native"

const Directory = styled.View`
  padding-left: ${({ level }) => `${12 * level}px`};
`;
export default Directory