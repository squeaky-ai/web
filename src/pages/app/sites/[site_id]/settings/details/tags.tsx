import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Main } from 'components/main';
import { Access } from 'components/sites/access';
import { Page } from 'components/sites/page';
import { OWNER, ADMIN } from 'data/teams/constants';
import { Container } from 'components/container';
import { Checkbox } from 'components/checkbox';
import { Table, Row, Cell } from 'components/table';
import { SettingsTag } from 'components/sites/settings/settings-tag';
import { Sort } from 'components/sort';
import { BreadCrumbs } from 'components/sites/breadcrumbs';
import { SettingsTagsBulkActions } from 'components/sites/settings/settings-tags-bulk-actions';
import { SettingsTabs } from 'components/sites/settings/settings-tabs';
import { ServerSideProps, getServerSideProps } from 'lib/auth';
import { useTags } from 'hooks/use-tags';


const SitesSettingsTags: NextPage<ServerSideProps> = ({ user }) => {
  const router = useRouter();
  const siteId = router.query.site_id as string;
  const [sort, setSort] = React.useState<string>('name__asc');
  const [selected, setSelected] = React.useState<string[]>([]);

  const { tags } = useTags();

  const results = [...tags].sort((a, b) => sort === 'name__asc'
    ? a.name.localeCompare(b.name)
    : b.name.localeCompare(a.name)
  );

  const onSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? setSelected(tags.map(t => t.id))
      : setSelected([]);
  };

  const selectedTags = selected.map(s => tags.find(t => t.id === s));

  return (
    <>
      <Head>
        <title>Squeaky | Site Settings | Tags</title>
      </Head>

      <Page user={user} scope={[OWNER, ADMIN]}>
        {({ site, member }) => (
          <Main>
            <BreadCrumbs site={site} items={[{ name: 'Settings', href: `/app/sites/${site.id}/settings/details` }, { name: 'Tags' }]} />

            <h3 className='title'>
              Site Settings
              <Access roles={[OWNER, ADMIN]} />
            </h3>

            <SettingsTabs site={site} member={member} page='tags' />

            <h4>Tags</h4>

            <Container className='md'>
              <p>You can add tags to your recordings to better document and categorise your findings. The table below lists any tags you have already created. You can delete or rename tags using the options in the table.</p>

              {tags.length > 0 && (
                <SettingsTagsBulkActions 
                  site={site} 
                  selected={selectedTags} 
                  setSelected={setSelected} 
                />
              )}

              <Table className='tags-table'>
                <Row head>
                  <Cell>
                    <Checkbox
                      checked={selected.length === tags.length && tags.length !== 0}
                      partial={selected.length !== 0 && selected.length !== tags.length && tags.length !== 0}
                      disabled={tags.length === 0}
                      onChange={onSelectAll} 
                    />
                  </Cell>
                  <Cell>
                    Tag name
                    <Sort 
                      name='name' 
                      order={sort} 
                      onAsc={() => setSort('name__asc')} 
                      onDesc={() => setSort('name__desc')} 
                    />
                  </Cell>
                  <Cell>Options</Cell>
                </Row>
                {tags.length === 0 && (
                  <Row fluid>
                    <p>There are currently no tags created for your site.</p>
                  </Row>
                )}

                {results.map(tag => (
                  <SettingsTag 
                    key={tag.id} 
                    tag={tag} 
                    siteId={siteId} 
                    selected={selected}
                    setSelected={setSelected}
                  />
                ))}
              </Table>
            </Container>
          </Main>
        )}
      </Page>
    </>
  );
};

export default SitesSettingsTags;
export { getServerSideProps };
