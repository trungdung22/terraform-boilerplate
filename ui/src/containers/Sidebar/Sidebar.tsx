import {
  BankOutlined,
  ContainerOutlined,
  TableOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'react-wize-brand';
import styled from 'styled-components';

const { Sider } = Layout;

const { SubMenu } = Menu;

export interface SidebarProps {
  collapsed: boolean;
  collapsedWidth: string;
  width?: string;
}

const StyledSider = styled(Sider)`
  &.ant-layout-sider {
    min-height: 100vh;
  }

  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const AppName = styled.div`
  margin-left: 0.5rem;
  font-size: 20px;
  color: black;
  font-weight: bold;
  span {
    &:nth-child(2) {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  collapsedWidth,
  width,
}) => {
  const location = useLocation();

  // React Antd has some problem when wrapping Menu.Item as a children of another tag.
  // Therefore, we must call AllowRolesGuard as a normal function
  // Check this issue at: https://stackoverflow.com/questions/61627505/ant-design-menu-and-menu-item-customize

  return (
    <StyledSider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={width}
      breakpoint="lg"
      collapsedWidth={collapsedWidth}
    >
      <Logo to="/main">
        <Loader svg={true} width="32px" />
        {collapsed ? null : (
          <AppName>
            <span>Wize</span>
            &nbsp;
            <span>Space</span>
          </AppName>
        )}
      </Logo>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['/main/session']}
        selectedKeys={[location.pathname]}
      >
        <SubMenu
              key="/main/session-management"
              icon={<TableOutlined />}
              title={<FormattedMessage id="menu.sessionManagement.all" />}
        >
          <Menu.Item key="/main/session-management/data">
            <Link to="/main/session-management/data">
              <FormattedMessage id="menu.sessionManagement.data" />
            </Link>
          </Menu.Item>
        </SubMenu>

      </Menu>
    </StyledSider>
  );
};
