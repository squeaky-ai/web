import { ApolloClient, InMemoryCache } from '@apollo/client';
import { UsersInvitation, TeamInviteAcceptInput, Team, NpsCreateInput } from 'types/graphql';
import { USER_INVITATION_QUERY } from 'data/users/queries';
import { TEAM_INVITE_ACCEPT_MUTATION } from 'data/teams/mutations';
import { BOOK_DEMO_MUTATION, CONTACT_MUTATION } from 'data/contact/mutations';
import { NPS_CREATE_MUTATION, SENTIMENT_CREATE_MUTATION } from 'data/feedback/mutations';
import { BookDemoInput, ContactInput } from 'types/contact';

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

export const contactForm = async (input: ContactInput): Promise<void> => {
  await client.mutate({
    mutation: CONTACT_MUTATION,
    variables: input
  });
};

export const bookDemoForm = async (input: BookDemoInput): Promise<void> => {
  await client.mutate({
    mutation: BOOK_DEMO_MUTATION,
    variables: input
  });
};

export const createNps = async (input: NpsCreateInput): Promise<void> => {
  await client.mutate({
    mutation: NPS_CREATE_MUTATION,
    variables: { input }
  });
};

export const createSentiment = async (input: NpsCreateInput): Promise<void> => {
  await client.mutate({
    mutation: SENTIMENT_CREATE_MUTATION,
    variables: { input }
  });
};
