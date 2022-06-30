import styled from 'styled-components';

const Content = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.span<{ hideName: boolean }>`
  margin-left: 1rem;
  margin-right: 1rem;
  @media (max-width: 375px) {
    display: ${(p) => (p.hideName ? 'none' : 'inline')};
  }
`;

interface UserMenuProps {
  hideName: boolean;
}

export const UserMenu: React.FC<UserMenuProps> = ({ hideName }) => {
  // TODO: update header items

  return (
    <div></div>
  );
};
