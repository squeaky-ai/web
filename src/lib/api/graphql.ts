import { ApolloClient, InMemoryCache, TypedDocumentNode } from '@apollo/client';
import { UsersInvitation, TeamInviteAcceptInput, Team, NpsCreateInput, AuthSignUpInput, User, AuthConfirmInput, AuthReconfirmInput, AuthPasswordUpdateInput, AuthPasswordResetInput, ContactPartnersInput } from 'types/graphql';
import { USER_INVITATION_QUERY } from 'data/users/queries';
import { TEAM_INVITE_ACCEPT_MUTATION } from 'data/teams/mutations';
import { AUTH_SIGNUP_MUTATION, AUTH_CONFIRM_MUTATION, AUTH_RECONFIRM_MUTATION, AUTH_PASSWORD_UPDATE_MUTATION, AUTH_PASSWORD_RESET_MUTATION } from 'data/auth/mutations';
import { BOOK_DEMO_MUTATION, CONTACT_MUTATION, CONTACT_STARTUPS_MUTATION, CONTACT_PARTNERS_MUTATION } from 'data/contact/mutations';
import { NPS_CREATE_MUTATION, SENTIMENT_CREATE_MUTATION } from 'data/feedback/mutations';
import { ContactInput, ContactStartupsInput, ContactDemoInput } from 'types/graphql';

export const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  uri: '/api/graphql',
  ssrMode: typeof window === 'undefined',
});

export const getGqlString = (document: TypedDocumentNode): string => {
  return document.loc?.source?.body;
};

export const authSignup = async (input: AuthSignUpInput): Promise<User> => {
  const { data } = await client.mutate({
    mutation: AUTH_SIGNUP_MUTATION,
    variables: { input },
  });

  return data.authSignup;
};

export const authConfirm = async (input: AuthConfirmInput): Promise<User> => {
  const { data } = await client.mutate({
    mutation: AUTH_CONFIRM_MUTATION,
    variables: { input },
  });

  return data.authConfirm;
};

export const authReconfirm = async (input: AuthReconfirmInput): Promise<string> => {
  const { data } = await client.mutate({
    mutation: AUTH_RECONFIRM_MUTATION,
    variables: { input },
  });

  return data.authReconfirm.message;
};

export const authPasswordUpdate = async (input: AuthPasswordUpdateInput): Promise<User> => {
  const { data } = await client.mutate({
    mutation: AUTH_PASSWORD_UPDATE_MUTATION,
    variables: { input },
  });

  return data.authPasswordUpdate;
};

export const authPasswordReset = async (input: AuthPasswordResetInput): Promise<string> => {
  const { data } = await client.mutate({
    mutation: AUTH_PASSWORD_RESET_MUTATION,
    variables: { input },
  });

  return data.authPasswordReset;
};

export const userInvitation = async (token: string): Promise<UsersInvitation> => {
  const { data } = await client.query({
    query: USER_INVITATION_QUERY,
    variables: { token },
  });

  return data.userInvitation;
};

export const teamInviteAccept = async (input: TeamInviteAcceptInput): Promise<Team> => {
  const { data } = await client.mutate({
    mutation: TEAM_INVITE_ACCEPT_MUTATION,
    variables: { input },
  });

  return data.teamInviteCancel;
};

export const contactForm = async (input: ContactInput): Promise<void> => {
  await client.mutate({
    mutation: CONTACT_MUTATION,
    variables: { input },
  });
};

export const bookDemoForm = async (input: ContactDemoInput): Promise<void> => {
  await client.mutate({
    mutation: BOOK_DEMO_MUTATION,
    variables: { input },
  });
};

export const contactStartupsForm = async (input: ContactStartupsInput): Promise<void> => {
  await client.mutate({
    mutation: CONTACT_STARTUPS_MUTATION,
    variables: { input },
  });
};

export const contactPartnersForm = async (input: ContactPartnersInput): Promise<void> => {
  await client.mutate({
    mutation: CONTACT_PARTNERS_MUTATION,
    variables: { input },
  });
};

export const createNps = async (input: NpsCreateInput): Promise<void> => {
  await client.mutate({
    mutation: NPS_CREATE_MUTATION,
    variables: { input },
  });
};

export const createSentiment = async (input: NpsCreateInput): Promise<void> => {
  await client.mutate({
    mutation: SENTIMENT_CREATE_MUTATION,
    variables: { input },
  });
};
