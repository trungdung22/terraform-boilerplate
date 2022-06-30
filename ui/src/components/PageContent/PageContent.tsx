import { Layout } from 'antd';
import classNames from 'classnames';
import styled from 'styled-components';
import { useSmallScreen } from '../../utils';

const StyledContent = styled(Layout.Content)`
  background: #fff;

  margin: 24px 16px;
  padding: 12px;

  &.sm {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const PageContent: React.FC = ({ children }) => {
  const smallScreen = useSmallScreen();

  return (
    <StyledContent className={classNames({ sm: smallScreen })}>
      {children}
    </StyledContent>
  );
};
