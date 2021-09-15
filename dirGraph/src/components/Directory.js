import styled from "styled-components"

const Directory = styled.view`
  padding-left: ${({ level }) => `${12 * level}px`};
`;
export default Directory