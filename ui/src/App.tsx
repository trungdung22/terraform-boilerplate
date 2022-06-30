import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import { AppRoutes, Header, Sidebar } from './containers';
import { ScreenType } from './core';
import { useScreenType } from './utils';
import {
  IntlProvider,
} from './providers';

const StyledApp = styled.div`
  // Your style here
`;

const DEFAULT_COLLAPSED_WIDTH = '80px';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState(DEFAULT_COLLAPSED_WIDTH);
  const screenType = useScreenType();

  const toggle = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (screenType === ScreenType.small) {
      setCollapsed((value) => {
        if (!value) {
          return true;
        }
        return value;
      });
    }

    if (screenType === ScreenType.small) {
      setCollapsedWidth('0');
    } else {
      setCollapsedWidth(DEFAULT_COLLAPSED_WIDTH);
    }
  }, [screenType]);

  return (
    <StyledApp>
      <IntlProvider>
        <Router>
            <Routes>
              <Route
                path="*"
                element={
                    <Layout>
                      <Sidebar
                        collapsed={collapsed}
                        width="230px"
                        collapsedWidth={collapsedWidth}
                      />
                      <Layout>
                        <Header
                          isMenuFolded={collapsed}
                          onFoldMenuIconClicked={toggle}
                        />
                        <AppRoutes />
                      </Layout>
                    </Layout>
                }
              />
            </Routes>
          </Router>
      </IntlProvider>
    </StyledApp>
  );
}

export default App;
