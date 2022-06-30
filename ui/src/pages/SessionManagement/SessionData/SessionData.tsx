import { SessionStatus, SessionModel } from '../../../core';
import { Button, Tabs } from 'antd';
import { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { PageHeader, PageContent } from '../../../components';
import { SessionManagementTable } from '../SessionDataTable/SessionDataTable';

const { TabPane } = Tabs;

const sessionStatuses = Object.values(SessionStatus);

export const SessionData = () => {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [selectedSession, setSelectedSession] = useState<SessionModel>();

  const handleReviewSession = useCallback((record: SessionModel) => {
    setSelectedSession(record);
    setIsInfoModalVisible(true);
  }, []);

  return (
    <>
      <PageHeader
        title="Session data management"
      ></PageHeader>
      <PageContent>
        <Tabs defaultActiveKey="all">
          <TabPane
              tab={<FormattedMessage id={`sessionManagement.tabs.all`} />}
              key="all"
            >
              <SessionManagementTable onReviewSession={handleReviewSession} />
          </TabPane>
        </Tabs>
      </PageContent>
    </>
  );
};
