import styled from 'styled-components';

export const Header = styled.header`
  height: 40px;
  background-color: #f2f2f2;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  padding: 16px;

  width: calc(100% - 32px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #ffffff;

  z-index: 10;
`;
