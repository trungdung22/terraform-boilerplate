import { SessionStatus, SessionModel, DEFAULT_PAGE, DEFAULT_PAGE_SIZE} from "../../../core";
import { Table, Tag } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import { useState, useEffect} from "react";

interface SessionManagementTableProps {
    status?: SessionStatus;
    onReviewSession: (record: SessionModel) => void;
}

export const SessionManagementTable: React.FC<SessionManagementTableProps> = ({
    status,
  }) => { 
    const [columns, setColumns] = useState<ColumnsType<any>>([]);
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: DEFAULT_PAGE,
        pageSize: DEFAULT_PAGE_SIZE,
      });

      const sessionData = [
        {
            id: 1, 
            name: "session 1", 
            status: "pending", 
            created_by: "Dung Do", 
            from: new Date("October 02, 2022 11:13:00"),
            to: new Date("October 13, 2022 11:13:00"),
        },
        {
            id: 2, 
            name: "session 2", 
            status: "completed", 
            created_by: "Dung Do", 
            from: new Date("October 10, 2022 11:13:00"),
            to: new Date("October 30, 2022 11:13:00"),
        }
    ]
    
    useEffect(() => {
        setColumns([
          {
            title: 'assigner',
            dataIndex: ['createdBy', 'displayName'],
            key: 'assigner',
          },
          {
            title: 'from',
            dataIndex: 'from',
            key: 'from',
            render: (value: SessionModel['from']) => (
              <FormattedDate
                value={value}
                year="numeric"
                month="short"
                day="numeric"
                weekday="short"
              />
            ),
          },
          {
            title: 'to',
            dataIndex: 'to',
            key: 'to',
            render: (value: SessionModel['to']) => (
              <FormattedDate
                value={value}
                year="numeric"
                month="short"
                day="numeric"
                weekday="short"
              />
            ),
          },
          {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
          },
        ]);
      }, []);

    return (
        <Table
          rowKey="id"
          columns={columns}
          dataSource={sessionData || []}
          scroll={{ x: 768 }}
          pagination={pagination}
        />
    );
  }