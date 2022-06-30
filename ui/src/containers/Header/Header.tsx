import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { createElement } from 'react';
import styled from 'styled-components';
import { UserMenu } from './UserMenu';

const { Header: AntdHeader } = Layout;

export interface HeaderProps {
  isMenuFolded: boolean;
  onFoldMenuIconClicked?: () => void;
}

const Flex = styled.div<{ isMenuFolded: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: 512px) {
    flex-direction: ${(p) => (p.isMenuFolded ? 'row' : 'column')};
    padding-top: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const StyledAntdHeader = styled(AntdHeader)`
  background-color: #fff;
  padding: 0;
  box-shadow: 0 1px 4px #00152914;
  z-index: 1;

  @media (max-width: 512px) {
    height: unset;
  }

  .trigger {
    padding: 0 24px;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const Header: React.FC<HeaderProps> = ({
  isMenuFolded,
  onFoldMenuIconClicked,
}) => {
  // TODO: update header items

  return (
    <StyledAntdHeader>
      <Flex isMenuFolded={isMenuFolded}>
        {createElement(isMenuFolded ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: onFoldMenuIconClicked,
        })}

        <UserMenu hideName={!isMenuFolded} />
      </Flex>
    </StyledAntdHeader>
  );
};
