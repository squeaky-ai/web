import React from 'react';
import type { FC } from 'react';
import { Table, Row, Cell } from 'components/table';
import { toHoursMinutesAndSeconds } from 'lib/dates';
import { Pagination } from 'components/pagination';
import { Tooltip } from 'components/tooltip';
import type { AnalyticsPages as AnalyticsPagesType } from 'types/graphql';

interface Props {
  pages: AnalyticsPagesType;
  page: number;
  setPage: (page: number) => void;
}

export const AnalyticsPages: FC<Props> = ({ pages, page, setPage }) => (
  <>
    <Table>
      <Row head>
        <Cell>Page</Cell>
        <Cell>Views</Cell>
        <Cell>Average time on page</Cell>
      </Row>
      {pages.items.map(page => (
        <Row key={page.path}>
          <Cell>
            <Tooltip button={page.path} fluid>
              {page.path}
            </Tooltip>
          </Cell>
          <Cell><b>{page.count}</b> <span className='percentage'>({page.percentage}%)</span></Cell>
          <Cell>{toHoursMinutesAndSeconds(page.avg)}</Cell>
        </Row>
      ))}
    </Table>

    <Pagination
      currentPage={page}
      pageSize={pages.pagination.pageSize}
      total={pages.pagination.total}
      setPage={setPage}
      scrollToTop={false}
    />
  </>
);

