import { ApolloClient, InMemoryCache } from '@apollo/client';
import { UsersInvitation, TeamInviteAcceptInput, Team } from 'types/graphql';
import { USER_INVITATION_QUERY } from 'data/users/queries';
import { TEAM_INVITE_ACCEPT_MUTATION } from 'data/teams/mutations';

export const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  uri: '/api/graphql',
  ssrMode: typeof window === 'undefined',
});

export const userInvitation = async (token: string): Promise<UsersInvitation> => {
  const { data } = await client.query({
    query: USER_INVITATION_QUERY,
    variables: { token }
  });

  return data.userInvitation;
};

export const teamInviteAccept = async (input: TeamInviteAcceptInput): Promise<Team> => {
  const { data } = await client.mutate({
    mutation: TEAM_INVITE_ACCEPT_MUTATION,
    variables: { input }
  });

  return data.teamInviteCancel;
};
