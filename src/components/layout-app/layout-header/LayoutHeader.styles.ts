import styled from 'styled-components';

export const Header = styled.header`
  height: 40px;
  background-color: rgba(12, 13, 15, 0.7);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  padding: 16px;

  width: calc(100% - 32px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #ffffff;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: #f2f2f2;
  color: #777777;

  display: flex;
  align-items: center;
  justify-content: center;
`;
